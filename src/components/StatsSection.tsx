"use client";
import {
  Building2,
  KeySquare,
  MapPin,
  NotebookPen,
} from "lucide-react";
import Image from "next/image";

export default function StatsSection() {
  return (
    <section className="max-w-7xl mx-auto py-16 px-6 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 items-center">

      <div className="flex flex-col items-end gap-6">
        <div className="bg-white shadow-md p-6 rounded flex flex-col items-center">
          <NotebookPen
            className="text-[var(--color-canopus-yellow)]"
            size={60}
            strokeWidth={0.75}
          />
          <p className="text-2xl font-bold text-[var(--color-canopus-blue)]">
            2.209.427m²
          </p>
          <p className="text-[#2bd4c3]">Área construída</p>
        </div>
        <div className="bg-white shadow-md p-6 rounded flex flex-col items-center">
          <KeySquare
            className="text-[var(--color-canopus-yellow)]"
            size={60}
            strokeWidth={0.75}
          />
          <p className="text-2xl font-bold text-[var(--color-canopus-blue)]">
            + de 27 mil
          </p>
          <p className="text-[#2bd4c3]">
            Unidades entregues
          </p>
        </div>
      </div>

      <div className="relative w-full aspect-[4/3] flex items-center justify-center">
        <div className="relative w-full h-full z-10">
          <Image
            src="/site-canopus-novo/images/Familia.png"
            alt="Imagem principal"
            fill
            className="object-contain rounded"
            priority
          />
        </div>

        <div className="absolute inset-0 z-20 pointer-events-none">
          <Image
            src="/site-canopus-novo/images/Shapes.png"
            alt="Shapes decorativos"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <div className="flex flex-col items-start gap-6">
        <div className="bg-white shadow-md p-6 rounded flex flex-col items-center">
          <Building2
            className="text-[var(--color-canopus-yellow)]"
            size={60}
            strokeWidth={0.75}
          />
          <p className="text-2xl font-bold text-[var(--color-canopus-blue)]">
            126
          </p>
          <p className="text-[#2bd4c3]">
            Edifícios entregues
          </p>
        </div>
        <div className="bg-white shadow-md p-6 rounded flex flex-col items-center">
          <MapPin
            className="text-[var(--color-canopus-yellow)]"
            size={60}
            strokeWidth={0.75}
          />
          <p className="text-2xl font-bold text-[var(--color-canopus-blue)]">
            3
          </p>
          <p className="text-[#2bd4c3]">
            Estados no Brasil
          </p>
        </div>
      </div>
    </section>
  );
}
