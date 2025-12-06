"use client";

import { MenuItem } from "@/lib/menu-data";
import { useCartStore } from "@/lib/cart-store";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

type Props = {
  item: MenuItem;
};

export function ProductCard({ item }: Props) {
  const addItem = useCartStore((s) => s.addItem);

  return (
    <div className="flex flex-col gap-3 rounded-3xl bg-white p-4 shadow-soft transition hover:-translate-y-1">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="display text-xl font-bold text-brown">{item.name}</h3>
          {item.description ? (
            <p className="text-sm text-brown/70">{item.description}</p>
          ) : null}
        </div>
        {item.badge ? (
          <Badge className="rounded-full bg-yellow text-brown shadow-chip">
            {item.badge}
          </Badge>
        ) : null}
      </div>
      <div className="flex items-center justify-between">
        <div className="display text-2xl font-extrabold text-brown">
          ₹{item.price}
        </div>
        <Button
          className="rounded-full bg-orange text-brown shadow-chip hover:bg-orange/90"
          onClick={() =>
            addItem({
              id: item.id,
              name: item.name,
              price: item.price,
              category: item.category,
            })
          }
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
}
