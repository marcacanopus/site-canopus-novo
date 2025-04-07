// src/components/BlogSection.tsx
"use client";
import Image from "next/image";

export type BlogPost = {
  title: string;
  excerpt: string;
  image: string;
  link: string;
};

export default function PostCard({ title, excerpt, image, link }: BlogPost) {
  return (
    <div
      className="bg-white rounded shadow hover:shadow-md transition overflow-hidden"
    >
      <div className="relative w-full h-56">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      <div className="p-6 flex flex-col justify-between h-full">
        <h3 className="text-[var(--color-canopus-blue)] font-semibold text-lg mb-3">
          {title}
        </h3>
        <p className="text-gray-500 text-sm mb-4">{excerpt}</p>
        <a
          href={link}
          className="text-[var(--color-canopus-blue)] text-sm font-medium hover:underline"
        >
          Leia mais →
        </a>
      </div>
    </div>
  );
}
