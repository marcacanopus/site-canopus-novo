"use client";

import Link from "next/link";
import menu from "@/data/menu.json";
import Image from "next/image";
import { useState } from "react";
import { useCity } from "@/context/cityContext";
import { Menu, X } from "lucide-react"; // ícones do shadcn/lucide
import { City } from "@/context/cityContext";

export default function Header() {
  const { activeCity, setActiveCity } = useCity();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleCityClick = (city: City) => {
    setActiveCity(activeCity === city ? "geral" : city);
    setIsOpen(false); // fecha o menu no mobile
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md p-4 overflow-x-hidden">
      <nav className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <Image
            src="/site-canopus-novo/logo_canopus.svg"
            alt="Canopus"
            width={140}
            height={30}
            priority
          />
        </div>

        {/* Botão de menu mobile */}
        <button
          className="md:hidden text-canopus-blue"
          onClick={toggleMenu}
          aria-label="Abrir menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menu links e cidades - versão desktop */}
        <div className="hidden md:flex items-center gap-6">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="text-canopus-blue hover:bg-gray-100 p-2 rounded"
            >
              {item.label}
            </Link>
          ))}

          {/* Cidades */}
          <div className="flex gap-1">
            {["São Paulo", "Belo Horizonte", "Rio de Janeiro"].map((city) => (
              <button
                key={city}
                className={`btn-sm p-1 font-bold ${
                  activeCity === city ? "bg-gray-200" : ""
                } rounded text-canopus-blue hover:cursor-pointer`}
                onClick={() => handleCityClick(city as City)}
              >
                {city === "São Paulo"
                  ? "SP"
                  : city === "Belo Horizonte"
                  ? "BH"
                  : "RJ"}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4 pb-4">
          {menu.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block text-canopus-blue font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="flex gap-2">
            {["São Paulo", "Belo Horizonte", "Rio de Janeiro"].map((city) => (
              <button
                key={city}
                className={`btn-sm p-1 font-bold w-full ${
                  activeCity === city ? "bg-gray-200" : ""
                } rounded text-canopus-blue hover:cursor-pointer`}
                onClick={() => handleCityClick(city as City)}
              >
                {city === "São Paulo"
                  ? "SP"
                  : city === "Belo Horizonte"
                  ? "BH"
                  : "RJ"}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
