"use client";

import stores from "@/data/stores.json";
import { useState } from "react";
import Image from "next/image";
import { Clock, Lamp, Locate, MapPin, Phone } from "lucide-react";

interface Store {
  nome: string;
  cidade: string;
  funcionamento: string;
  telefone: string;
  endereco: string;
  decorado: boolean;
  image: string;
}

export default function StoreSlider({ cidadeAtiva }: { cidadeAtiva: string }) {
  const lojasFiltradas = stores.filter(
    (loja) => cidadeAtiva === "geral" || loja.cidade === cidadeAtiva
  );
  const [indiceAtual, setIndiceAtual] = useState(0);

  const loja = lojasFiltradas[indiceAtual];

  const proximo = () => setIndiceAtual((i) => (i + 1) % lojasFiltradas.length);
  const anterior = () =>
    setIndiceAtual(
      (i) => (i - 1 + lojasFiltradas.length) % lojasFiltradas.length
    );

  return (
    <div className="bg-gradient-to-r from-cyan-400 to-teal-400 p-10 rounded-lg shadow-md relative overflow-hidden">
      <div className="flex flex-col md:flex-row justify-center gap-8">
        <div>
          <h2 className="text-4xl font-bold  text-canopus-blue">
            Visite nossas lojas <br />
            {cidadeAtiva !== "geral" ? `em ${cidadeAtiva}` : ""}
          </h2>
          <p className="mt-2 text-lg text-canopus-blue">
            Venha ver de perto toda a infra estrutura que você precisa.
          </p>

          <ul className="mt-4 space-y-2 text-canopus-blue text-sm">
            <li className="flex items-center gap-2">
              <Clock /> {loja.funcionamento}
            </li>
            <li className="flex items-center gap-2">
              <Phone /> {loja.telefone}
            </li>
            <li className="flex items-center gap-2">
              <MapPin /> {loja.endereco}
            </li>
            {loja.decorado && (
              <li className="flex items-center gap-2">
                <Lamp /> Essa loja tem apartamento decorado
              </li>
            )}
          </ul>

          <button className="mt-4 px-6 py-3 bg-canopus-blue text-white rounded-full hover:bg-canopus-blue/90 transition">
            Agende sua visita agora →
          </button>
        </div>

        <div className="relative aspect-[16/9] w-full max-w-[600px]">
          <Image
            src={loja.image}
            alt={loja.nome}
            fill
            className="rounded-lg object-cover"
          />
        </div>
        

      </div>
      <div className="d-flex justify-center">
      <div className="mt-5 mb-5 w-[65%]  h-0.5 bg-canopus-blue rounded-full " />

      </div>
      <div className="flex justify-center mt-6 gap-4">
        <button onClick={anterior} className="text-lg hover:cursor-pointer">
          ←
        </button>
        {lojasFiltradas.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setIndiceAtual(idx)}
            className={`px-3 py-1 rounded hover:cursor-pointer ${
              idx === indiceAtual
                ? "bg-canopus-blue/30 text-canopus-blue font-bold"
                : "text-white"
            }`}
          >
            Loja {idx + 1}
          </button>
        ))}
        <button onClick={proximo} className="text-lg hover:cursor-pointer">
          →
        </button>
      </div>
    </div>
  );
}
