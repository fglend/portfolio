// Generates templates/resume-template.docx — a Word document containing
// docxtemplater placeholder tags ({name}, {#experience}...{/experience}, etc.)
// instead of real content. Open it in Word/Google Docs to restyle the layout;
// as long as the {tags} stay intact inside a single run, `npm run resume`
// will still fill it correctly.
//
// Run with: npm run resume:template

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  AlignmentType,
  Document,
  HeadingLevel,
  Packer,
  Paragraph,
  TextRun,
  BorderStyle,
} from "docx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "templates");
const outFile = join(outDir, "resume-template.docx");

const HEADING_COLOR = "18181B";
const MUTED_COLOR = "52525B";

function sectionHeading(text: string) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 320, after: 120 },
    border: {
      bottom: { style: BorderStyle.SINGLE, size: 4, color: HEADING_COLOR, space: 4 },
    },
    children: [
      new TextRun({ text: text.toUpperCase(), bold: true, color: HEADING_COLOR, size: 22 }),
    ],
  });
}

function tag(text: string) {
  return new Paragraph({ children: [new TextRun({ text })] });
}

const doc = new Document({
  sections: [
    {
      properties: {
        page: { margin: { top: 720, bottom: 720, left: 900, right: 900 } },
      },
      children: [
        // Header
        new Paragraph({
          alignment: AlignmentType.LEFT,
          children: [new TextRun({ text: "{name}", bold: true, size: 40 })],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [new TextRun({ text: "{role}", size: 26, color: MUTED_COLOR })],
        }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({
              text: "{email}  |  {location}  |  {github}  |  {linkedin}",
              size: 18,
              color: MUTED_COLOR,
            }),
          ],
        }),

        // Summary
        sectionHeading("Summary"),
        new Paragraph({ children: [new TextRun({ text: "{summary}", size: 20 })] }),

        // Experience
        sectionHeading("Experience"),
        tag("{#experience}"),
        new Paragraph({
          spacing: { before: 160 },
          children: [
            new TextRun({ text: "{role} ", bold: true, size: 21 }),
            new TextRun({ text: "— {company}", size: 21 }),
          ],
        }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "{period}  ·  {location}", italics: true, size: 18, color: MUTED_COLOR }),
          ],
        }),
        tag("{#highlights}"),
        new Paragraph({
          bullet: { level: 0 },
          children: [new TextRun({ text: "{.}", size: 20 })],
        }),
        tag("{/highlights}"),
        tag("{/experience}"),

        // Education
        sectionHeading("Education"),
        tag("{#education}"),
        new Paragraph({
          spacing: { before: 120 },
          children: [new TextRun({ text: "{degree}", bold: true, size: 21 })],
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "{school}  ·  {period}", size: 19, color: MUTED_COLOR }),
          ],
        }),
        tag("{/education}"),

        // Trainings
        sectionHeading("Trainings Attended"),
        tag("{#trainings}"),
        new Paragraph({
          bullet: { level: 0 },
          spacing: { after: 20 },
          children: [
            new TextRun({ text: "{title} ", size: 19 }),
            new TextRun({ text: "— {issuer} ({year})", size: 19, color: MUTED_COLOR }),
          ],
        }),
        tag("{/trainings}"),

        // Open-source projects
        sectionHeading("Open Source Projects"),
        tag("{#projects}"),
        new Paragraph({
          spacing: { before: 120 },
          children: [new TextRun({ text: "{title}", bold: true, size: 21 })],
        }),
        new Paragraph({ children: [new TextRun({ text: "{description}", size: 19 })] }),
        new Paragraph({
          spacing: { after: 60 },
          children: [
            new TextRun({ text: "{href}  ·  {tags}", size: 18, color: MUTED_COLOR }),
          ],
        }),
        tag("{/projects}"),

        // Tech stack
        sectionHeading("Tech Stack"),
        tag("{#techStack}"),
        new Paragraph({
          spacing: { after: 20 },
          children: [
            new TextRun({ text: "{category}: ", bold: true, size: 19 }),
            new TextRun({ text: "{items}", size: 19 }),
          ],
        }),
        tag("{/techStack}"),
      ],
    },
  ],
});

mkdirSync(outDir, { recursive: true });
const buffer = await Packer.toBuffer(doc);
writeFileSync(outFile, buffer);
console.log(`Template written to ${outFile}`);
