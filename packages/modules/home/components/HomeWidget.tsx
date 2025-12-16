"use client";


export function HomeWidget({ title, description }: { title: string; description: string }) {
  return (
    <div className="card">
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </div>
  );
}

