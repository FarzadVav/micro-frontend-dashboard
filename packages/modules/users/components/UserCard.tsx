"use client";

import { Card } from "@repo/ui/card";

export function UserCard({ name, email }: { name: string; email: string }) {
  return (
    <Card>
      <div className="p-4">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </Card>
  );
}

