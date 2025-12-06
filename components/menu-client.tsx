"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { menuItems, categories, type MenuItem } from "@/lib/menu-data";
import { CategoryPills } from "@/components/category-pills";
import { Input } from "@/components/ui/input";
import { CartSummary } from "@/components/cart-summary";
import { ProductCard } from "@/components/product-card";

export function MenuClient() {
  const params = useSearchParams();
  const router = useRouter();
  const defaultCategory = params.get("category") || categories[0].id;
  const [selected, setSelected] = useState(defaultCategory);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const query = new URLSearchParams(params.toString());
    query.set("category", selected);
    router.replace(`?${query.toString()}`, { scroll: false });
  }, [selected, router, params]);

  const filtered = useMemo(() => {
    return menuItems.filter((item) => {
      const matchCategory = item.category === selected;
      const matchSearch = item.name.toLowerCase().includes(search.toLowerCase());
      return matchCategory && matchSearch;
    });
  }, [selected, search]);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-14 pt-6 sm:px-6">
      <div className="rounded-[28px] bg-white p-6 shadow-soft">
        <h1 className="display text-4xl font-extrabold text-brown">Menu</h1>
        <p className="mt-2 text-brown/70">
          Pick your favorites and send the order directly via WhatsApp.
        </p>
        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <CategoryPills categories={categories} onSelect={(id) => setSelected(id)} />
          <Input
            placeholder="Search items..."
            className="max-w-sm rounded-full border-brown/20 bg-amber-50"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <CartSummary />

      <div className="grid gap-4 md:grid-cols-2">
        {filtered.map((item: MenuItem) => (
          <ProductCard key={item.id} item={item} />
        ))}
        {filtered.length === 0 ? (
          <div className="rounded-2xl bg-white p-6 text-brown shadow-soft">
            Nothing found. Try another category or search term.
          </div>
        ) : null}
      </div>
    </main>
  );
}
