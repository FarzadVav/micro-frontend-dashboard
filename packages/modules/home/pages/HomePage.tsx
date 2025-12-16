// This page runs on the client because it uses global theme state.
"use client";

export function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Welcome to Dashboard</h1>
        <p className="text-muted-foreground mt-2">
          This is the home module - your dashboard landing page.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="card">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Quick Stats</h3>
            <p className="text-sm text-muted-foreground">
              View your dashboard statistics and metrics.
            </p>
            <div className="mt-3 text-sm text-muted-foreground">
              Current theme: <span className="font-semibold">dark</span>
            </div>
            <div className="mt-1 text-sm text-muted-foreground">
              Shared counter: <span className="font-semibold">0</span>
            </div>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Recent Activity</h3>
            <p className="text-sm text-muted-foreground">
              See what's been happening recently.
            </p>
          </div>
        </div>

        <div className="card">
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Notifications</h3>
            <p className="text-sm text-muted-foreground">
              Check your latest notifications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

