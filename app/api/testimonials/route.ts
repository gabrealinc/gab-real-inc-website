import { NextResponse } from "next/server";

const dataSourceId = "23ca4fa7-7eaf-8158-baf3-000b5791e228";

type NotionText = { plain_text?: string };
type NotionProperty = {
  title?: NotionText[];
  rich_text?: NotionText[];
};

type NotionPage = {
  id: string;
  properties?: Record<string, NotionProperty>;
};

const plainText = (property?: NotionProperty) =>
  [...(property?.title ?? []), ...(property?.rich_text ?? [])]
    .map((item) => item.plain_text ?? "")
    .join("")
    .trim();

export async function GET() {
  const token = process.env.NOTION_API_KEY;
  if (!token) {
    return NextResponse.json({ configured: false, testimonials: [] }, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  const response = await fetch(`https://api.notion.com/v1/data_sources/${dataSourceId}/query`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Notion-Version": "2026-03-11",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      page_size: 100,
      ...(process.env.NODE_ENV === "production" ? { filter: { property: "On Website", checkbox: { equals: true } } } : {}),
      sorts: [{ timestamp: "created_time", direction: "descending" }],
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    return NextResponse.json({ configured: true, testimonials: [], error: "Notion is temporarily unavailable." }, { status: 503 });
  }

  const payload = await response.json() as { results?: NotionPage[] };
  const testimonials = (payload.results ?? []).map((page) => ({
    id: page.id,
    name: plainText(page.properties?.["Client Name"]),
    title: plainText(page.properties?.Title),
    service: plainText(page.properties?.["Product / Service"]),
    quote: plainText(page.properties?.Testimonial),
  })).filter((testimonial) => testimonial.name && testimonial.quote);

  return NextResponse.json({ configured: true, testimonials }, {
    headers: { "Cache-Control": "public, max-age=60, stale-while-revalidate=300" },
  });
}
