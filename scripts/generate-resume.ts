// Reads templates/resume-template.docx, fills its {tags} with the live data
// from src/data/site.ts, and writes the result to public/resume.docx so it's
// served at /resume.docx and linked from the "Download Resume" button.
//
// Run with: npm run resume  (also runs automatically before `dev`/`build`)

import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import {
  profile,
  experience,
  education,
  trainings,
  projects,
  techStack,
} from "../src/data/site";

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatePath = join(__dirname, "..", "templates", "resume-template.docx");
const outPath = join(__dirname, "..", "public", "resume.docx");

if (!existsSync(templatePath)) {
  console.error(
    `Template not found at ${templatePath}. Run "npm run resume:template" first.`,
  );
  process.exit(1);
}

const content = readFileSync(templatePath, "binary");
const zip = new PizZip(content);
const doc = new Docxtemplater(zip, {
  paragraphLoop: true,
  linebreaks: true,
});

doc.render({
  name: profile.name,
  role: profile.role,
  summary: profile.summary,
  email: profile.email,
  location: profile.location,
  github: profile.social.github.replace(/^https?:\/\//, ""),
  linkedin: profile.social.linkedin.replace(/^https?:\/\//, ""),
  experience: experience.map((job) => ({
    role: job.role.trim(),
    company: job.company,
    period: job.period,
    location: job.location ?? "",
    highlights: job.highlights,
  })),
  education: education.map((entry) => ({
    degree: entry.degree,
    school: entry.school,
    period: entry.period,
  })),
  trainings: trainings.map((item) => ({
    title: item.title.trim(),
    issuer: item.issuer,
    year: item.year,
  })),
  projects: projects
    .filter((project) => project.visibility === "open-source")
    .map((project) => ({
      title: project.title,
      description: project.description,
      href: project.href ?? "",
      tags: project.tags.join(", "),
    })),
  techStack: techStack.map((group) => ({
    category: group.category,
    items: group.items.join(", "),
  })),
});

const buffer = doc.getZip().generate({ type: "nodebuffer" });
writeFileSync(outPath, buffer);
console.log(`Resume generated at ${outPath}`);
