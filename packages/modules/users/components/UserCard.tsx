"use client";


export function UserCard({ name, email }: { name: string; email: string }) {
  return (
    <div className="card">
      <div className="p-4">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
    </div>
  );
}

