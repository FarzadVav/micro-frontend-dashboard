"use client";


export function CommentCard({
  author,
  content,
  date,
}: {
  author: string;
  content: string;
  date: string;
}) {
  return (
    <div className="card">
      <div className="p-4">
        <div className="flex items-start justify-between mb-2">
          <h4 className="font-semibold">{author}</h4>
          <span className="text-sm text-muted-foreground">{date}</span>
        </div>
        <p className="text-sm">{content}</p>
      </div>
    </div>
  );
}

