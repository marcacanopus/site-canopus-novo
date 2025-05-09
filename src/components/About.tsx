"use client";
import data from "@/data/about.json";
import StatsSection from "./StatsSection";

export default function AboutSection() {
  return (
    <section className="max-w-7xl mx-auto py-10 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
        <h2 className="text-5xl md:text-6xl font-extrabold text-[var(--color-canopus-blue)] leading-tight">
          {data.title}
        </h2>

        <div className="space-y-6 text-[var(--color-canopus-blue)] text-lg">
          {data.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
      <StatsSection />
    </section>
  );
}
