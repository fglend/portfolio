import type { APIRoute } from "astro";

// Every indexable page on the site. Add a path here when you add a new page.
const pages = ["/"];

export const GET: APIRoute = ({ site }) => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = pages
    .map((path) => {
      const loc = new URL(`${base}${path}`, site).href;
      return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
