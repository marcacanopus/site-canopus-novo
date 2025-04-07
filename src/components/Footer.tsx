import { FooterSection } from "@/types/FooterSection";
import { Facebook, Instagram, Linkedin, X, Youtube } from "lucide-react";
import Image from "next/image";

type Props = {
  sections: FooterSection[];
};

export default function Footer({ sections }: Props) {
  return (
    <div className="border-14 border-y-0 border-x-[#023043]">
      <div className="flex items-center justify-between md:items-start bg-white p-4  container mx-auto">
        <Image
          src="/site-canopus-novo/logo_canopus.svg"
          alt="Next.js logo"
          width={200}
          height={30}
          priority
        />
        <div className="flex gap-4 text-white/80 text-xl">
          <a href="/">
            <Facebook size={30} className="text-[var(--color-canopus-blue)]" />
          </a>
          <a href="/">
            <Instagram size={30} className="text-[var(--color-canopus-blue)]" />
          </a>
          <a href="/">
            <Linkedin size={30} className="text-[var(--color-canopus-blue)]" />
          </a>
          <a href="/">
            <X size={30} className="text-[var(--color-canopus-blue)]" />
          </a>
          <a href="/">
            <Youtube size={30} className="text-[var(--color-canopus-blue)]" />
          </a>
        </div>
      </div>
      <footer className="bg-[#023043] text-white pt-12 pb-6 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
          {sections.map((section, index) => (
            <div key={index} className="md:w-1/4">
              <h4 className="text-white font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2 text-sm text-white/80">
                {section.items.map((item, i) => (
                  <li key={i} className="flex flex-col p-0.5">
                    <a
                      href={item.href}
                      className="hover:underline font-semibold"
                    >
                      {item.subtitle}
                    </a>
                    <a href={item.href} className="hover:underline">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-white/60 text-sm">
          © Todos os Direitos Reservados. Canopus 2025
        </div>
      </footer>
    </div>
  );
}
