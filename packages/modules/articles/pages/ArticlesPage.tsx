"use client";

export function ArticlesPage() {
  const articles = [
    { id: 1, title: "Getting Started with Next.js", status: "Published", views: 1234 },
    { id: 2, title: "Advanced TypeScript Patterns", status: "Draft", views: 0 },
    { id: 3, title: "Building Modular Applications", status: "Published", views: 567 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Articles</h1>
        <p className="text-muted-foreground mt-2">
          Manage your blog articles and content.
        </p>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <div className="card" key={article.id}>
            <div className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    <span>Status: {article.status}</span>
                    <span>Views: {article.views}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

