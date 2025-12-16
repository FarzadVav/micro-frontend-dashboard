"use client";

export function ArticleCard({
  title,
  status,
  views,
}: {
  title: string;
  status: string;
  views: number;
}) {
  return (
    <div className="card">
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
          <span>{status}</span>
          <span>{views} views</span>
        </div>
      </div>
    </div>
  );
}

