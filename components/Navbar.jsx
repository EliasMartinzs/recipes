import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <header className="w-full z-50 p-10 bg-slate-50">
      <div className="flex items-center justify-center space-x-5">
        <Link
          href="/"
          className="text-black text-2xl font-extralight hover:border-b-2 hover:text-lime-500"
        >
          Recipes
        </Link>
        <Link
          href="/favorites"
          className="text-black text-2xl font-extralight hover:border-b-2 hover:text-lime-500"
        >
          Favorites
        </Link>
      </div>
    </header>
  );
}
