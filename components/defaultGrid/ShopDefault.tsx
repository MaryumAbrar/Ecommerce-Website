"use client";

import { useState } from "react";
import { faGrip, faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ShopDefaultProduct from "../common/ShopDefaultProduct";
import ListProduct from "../common/ListProduct";

export default function ShopDefault({ products, View }: any) {
  const [perPage, setPerPage] = useState<number>(12);
  const [sortBy, setSortBy] = useState<string>("Best Match");
  const [search, setSearch] = useState<string>("");
  const [view, setView] = useState<"grid" | "list">(View || "grid");

  return (
    <div className="w-[90vw] md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      <div className="">
        {/* Header */}
        <h3 className="text-xl tracking-wider font-semibold text-blue-950">Ecommerce Accessories & Fashion Item</h3>
      </div>

      <div className="flex flex-wrap flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <p className="text-sm text-gray-500">About 9,620 results (0.62 seconds)</p>
        {/* Per Page Input */}
        <div className="lg:-mt-6 flex flex-col md:items-center md:flex-row gap-5">
          <div className=" flex items-center gap-2">
            <label htmlFor="perPage" className="text-base font-medium text-blue-700">
              Per Page:
            </label>
            <input id="perPage" type="number" min="1" value={perPage} onChange={(e) => setPerPage(Number(e.target.value))} className="w-14 px-2 py-1 border text-sm focus:outline-none focus:ring-0" />
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2">
            <label htmlFor="sortBy" className="text-base font-medium text-blue-700">
              Sort By:
            </label>
            <select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-1 py-2 text-[12px] text-slate-400 border w-24 focus:outline-none focus:ring-0">
              <option>Best Match</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest</option>
            </select>
          </div>

          {/* View Toggle */}
          <div className="flex items-center">
            <label className="text-base font-medium text-blue-700 mr-2">View:</label>
            <button className={`px-1 rounded-md ${view === "grid" && "bg-slate-200"}`} onClick={() => setView("grid")}>
              <FontAwesomeIcon icon={faGrip} className="text-blue-900 text-sm" />
            </button>
            <button className={`px-1 rounded-md ${view === "list" && "bg-slate-300"}`} onClick={() => setView("list")}>
              <FontAwesomeIcon icon={faList} className="text-blue-900 text-sm" />
            </button>
          </div>

          <div>
            <input id="search" type="string" value={search} onChange={(e) => setSearch(e.target.value)} className="w-40 px-2 py-1 text-sm border-[1px] border-slate-400 focus:outline-none focus:ring-0" />
          </div>
        </div>
      </div>

      {/* Products */}
      {view === "grid" && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 mt-4">
          {products.slice(0, perPage).map((product: any) => (
            <div key={product.id} className="mt-8">
              <ShopDefaultProduct product={product} />
            </div>
          ))}
        </div>
      )}

      {view === "list" && (
        <div className="grid mt-4">
          {products.slice(0, perPage).map((product: any) => (
            <div key={product.id} className="mt-8">
              <ListProduct product={product} />
            </div>
          ))}
        </div>
      )}

    </div>
  );
}
