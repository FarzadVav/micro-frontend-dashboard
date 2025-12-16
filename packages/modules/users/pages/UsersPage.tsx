"use client";


export function UsersPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground mt-2">
          Manage your users and permissions.
        </p>
      </div>

      <div className="card">
        <div className="p-6">
          <p className="text-muted-foreground">
            This module is currently disabled in the configuration.
            Enable it in packages/config/modules.ts to see this page.
          </p>
        </div>
      </div>
    </div>
  );
}

