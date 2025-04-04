import { FooterSection } from "@/types/FooterSection";
import Image from "next/image";

type Props = {
  sections: FooterSection[];
};

export default function Footer({ sections }: Props) {
  return (
    <footer className="bg-[#023043] text-white pt-12 pb-6 px-6 md:px-16">
      <div className="flex flex-col items-center md:items-start bg-white p-4">
        <Image
          className=""
          src="/logo_canopus.svg"
          alt="Next.js logo"
          width={140}
          height={30}
          priority
        />{" "}
        <div className="flex gap-4 text-white/80 text-xl">
          {/* redes sociais - coloque ícones ou use react-icons */}
          <i className="fab fa-facebook-f" />
          <i className="fab fa-instagram" />
          <i className="fab fa-linkedin-in" />
          <i className="fab fa-x-twitter" />
          <i className="fab fa-youtube" />
          <i className="fab fa-pinterest" />
          <i className="fab fa-tiktok" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between gap-12">
        {/* Logo */}

        {/* Seções */}
        {sections.map((section, index) => (
          <div key={index}>
            <h4 className="text-white font-semibold mb-4">{section.title}</h4>
            <ul className="space-y-2 text-sm text-white/80">
              {section.items.map((item, i) => (
                <li key={i}>
                  <a href={item.href} className="hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Footer base */}
      <div className="mt-12 text-center text-white/60 text-sm">
        © Todos os Direitos Reservados. Canopus 2025
      </div>
    </footer>
  );
}
