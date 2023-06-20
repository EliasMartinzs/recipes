import Image from "next/image";
import React from "react";

export default function Main() {
  return (
    <div className="w-full">
      <div className="w-full h-[30rem] relative flex items-center justify-center">
        <Image
          src="/bg1.jpg"
          fill
          alt="background"
          className="object-cover rounded-lg"
        />
        <h3 className="absolute">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis
          molestiae eius dolore ipsam earum voluptatibus asperiores distinctio
          odit facere sed nihil ducimus, error odio, beatae dignissimos.
          Aspernatur, earum? Tempora, similique!
        </h3>
      </div>
    </div>
  );
}
