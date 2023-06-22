import Link from "next/link";
import React from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Footer() {
  const d = new Date();
  const year = d.getFullYear();

  return (
    <footer className="w-full mt-20 h-80 bg-[#121522]">
      <div className="flex items-center justify-center pt-32">
        <div className="flex gap-20 text-white text-2xl">
          <Link href="https://rapidapi.com/apininjas/api/recipe-by-api-ninjas/">
            Api Recipes
          </Link>
          <Link href="/">Documentation</Link>
        </div>
      </div>
      <div className="flex justify-center items-center gap-20">
        <Link
          href="/"
          className="flex items-center gap-5 text-2xl pt-10 text-white"
        >
          <AiOutlineInstagram /> Instagram
        </Link>
        <Link
          href="/"
          className="flex items-center gap-5 text-2xl pt-10 text-white"
        >
          <AiOutlineWhatsApp /> WhatsApp
        </Link>
      </div>
      <div className="flex items-center justify-end mx-20 pt-10 text-white">
        Copyright By Elias Martins {year}
      </div>
    </footer>
  );
}
