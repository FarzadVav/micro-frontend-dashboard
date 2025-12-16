"use client";

export function ProductsPage() {
  const products = [
    { id: 1, name: "Product A", price: "$99", stock: 45 },
    { id: 2, name: "Product B", price: "$149", stock: 12 },
    { id: 3, name: "Product C", price: "$79", stock: 89 },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Products</h1>
        <p className="text-muted-foreground mt-2">
          Manage your product catalog and inventory.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <div className="p-6">
              <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
              <p className="text-2xl font-bold mb-1">{product.price}</p>
              <p className="text-sm text-muted-foreground">
                Stock: {product.stock} units
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="card">
        <div className="p-6 space-y-3">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold">Shared Counter</h3>
              <p className="text-sm text-muted-foreground">
                Global state available across all modules.
              </p>
            </div>
            <span className="text-2xl font-bold">0</span>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => {}}
              className="px-3 py-2 border rounded-md hover:bg-muted transition-colors"
            >
              -1
            </button>
            <button
              onClick={() => {}}
              className="px-3 py-2 border rounded-md hover:bg-muted transition-colors"
            >
              +1
            </button>
            <button
              onClick={() => {}}
              className="px-3 py-2 border rounded-md hover:bg-muted transition-colors"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

