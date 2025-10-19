"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  const searchParams = useSearchParams();
  console.log(searchParams);
  const router = useRouter();
  const pathname = usePathname();
  const sortValue = searchParams.get("sort") || "newest";

  const handleFilter = (value: string): void => {
    const params = new URLSearchParams(searchParams);
    params.set("sort", value);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center justify-end gap-2 text-sm text-gray-500 my-6">
      <label htmlFor="sort" className="sr-only">
        Sort properties
      </label>
      <span>Sort by:</span>
      <select
        name="sort"
        id="sort"
        value={sortValue}
        className="ring-1 ring-gray-200 shadow-md p-1 rounded-sm"
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
        <option value="asc">Price: Low to High</option>
        <option value="desc">Price: High to Low</option>
      </select>
    </div>
  );
};

export default Filter;
