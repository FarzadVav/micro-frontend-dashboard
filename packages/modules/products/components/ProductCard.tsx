"use client";


export function ProductCard({
  name,
  price,
  stock,
}: {
  name: string;
  price: string;
  stock: number;
}) {
  return (
    <div className="card">
      <div className="p-4">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-lg font-bold mt-1">{price}</p>
        <p className="text-sm text-muted-foreground">Stock: {stock}</p>
      </div>
    </div>
  );
}

