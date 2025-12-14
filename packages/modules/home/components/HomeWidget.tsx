"use client";

import { Card } from "@repo/ui/card";

export function HomeWidget({ title, description }: { title: string; description: string }) {
  return (
    <Card>
      <div className="p-4">
        <h4 className="font-semibold">{title}</h4>
        <p className="text-sm text-muted-foreground mt-1">{description}</p>
      </div>
    </Card>
  );
}

