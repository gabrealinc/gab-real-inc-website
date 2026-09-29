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
type NotionQuery = {
  results?: NotionPage[];
  has_more?: boolean;
  next_cursor?: string | null;
};

const plainText = (property?: NotionProperty) =>
  [...(property?.title ?? []), ...(property?.rich_text ?? [])]
    .map((item) => item.plain_text ?? "")
    .join("")
    .trim();

export async function GET() {
  const token = process.env.NOTION_API_KEY;
  if (!token) {
    return NextResponse.json({ configured: false, testimonials: [], error: "Notion is not connected." }, {
      headers: { "Cache-Control": "no-store" },
    });
  }

  try {
    const pages: NotionPage[] = [];
    let cursor: string | undefined;
    do {
      const response = await fetch(`https://api.notion.com/v1/data_sources/${dataSourceId}/query`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Notion-Version": "2026-03-11",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          page_size: 100,
          filter: { property: "On Website", checkbox: { equals: true } },
          sorts: [{ timestamp: "created_time", direction: "descending" }],
          ...(cursor ? { start_cursor: cursor } : {}),
        }),
        cache: "no-store",
      });
      if (!response.ok) throw new Error(`Notion returned ${response.status}`);
      const payload = await response.json() as NotionQuery;
      pages.push(...(payload.results ?? []));
      if (payload.has_more && !payload.next_cursor) throw new Error("Notion pagination cursor missing");
      cursor = payload.has_more ? payload.next_cursor ?? undefined : undefined;
    } while (cursor);

    const testimonials = pages.map((page) => ({
      id: page.id,
      name: plainText(page.properties?.["Client Name"]),
      title: plainText(page.properties?.Title),
      service: plainText(page.properties?.["Product / Service"]),
      quote: plainText(page.properties?.Testimonial),
    })).filter((testimonial) => testimonial.quote);

    return NextResponse.json({ configured: true, testimonials }, {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return NextResponse.json({ configured: true, testimonials: [], error: "Notion is temporarily unavailable." }, { status: 503 });
  }
}
