"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Main() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    updateParams(query);
    setQuery("");
  };

  const updateParams = (query) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (query) {
      searchParams.set("query", query);
    } else {
      searchParams.delete("query");
    }

    const newSeachQuery = `
      ${window.location.pathname}?${searchParams.toString()}
    `;

    router.push(newSeachQuery);
  };

  return (
    <div className="w-full">
      <div className="w-full h-[30rem] relative flex items-center justify-center">
        <Image
          src="/bg1.jpg"
          fill
          alt="background"
          className="object-cover rounded-lg"
          priority
        />
        <div className="absolute top-20 bg-slate-50 bg-opacity-70 p-2 rounded-lg">
          <div className="font-extralight text-2xl lg:text-5xl capitalize">
            <h3>Best Data Base for recipes</h3>
            <span className="flex justify-end text-xl font-medium text-green-950">
              +200,000 Recipes
            </span>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <input
            type="text"
            name="query"
            onChange={(e) => setQuery(e.target.value.toLowerCase())}
            value={query}
            placeholder="Pizza"
            className="w-96 lg:w-[45rem] p-2 rounded-full outline-none flex items-center flex-row flex-wrap justify-center relative"
          />
          <Image
            src="/search.svg"
            width={30}
            height={30}
            alt="search"
            className="object-contain absolute top-[5px] right-0 mr-3 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </div>
    </div>
  );
}
