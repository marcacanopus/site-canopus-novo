'use client';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
        <Image
          src="/site-canopus-novo/images/Familia.png" 
          alt="Família feliz"
          fill
          className="object-cover"
          priority 
        />
      </div>

      <div className="w-full md:w-1/2 bg-gradient-to-br from-teal-500 to-teal-400 text-white p-10 flex flex-col justify-center relative overflow-hidden items-start">
        <h2 className="text-3xl md:text-5xl font-extrabold leading-tight text-[#00293d]">
          TUDO QUE VOCÊ <br />
          E SUA FAMÍLIA <br />
          PRECISAM
        </h2>

        <a
          href="#"
          className="mt-8 inline-block bg-[#00293d] text-white text-sm px-6 py-3 rounded-full hover:bg-opacity-90 border-[#00293d] hover:bg-white hover:text-[#00293d] transition"
        >
          Conheça todos os empreendimentos →
        </a>

        <div className="absolute bottom-4 right-4 opacity-10 w-32 h-32">
          <Image
            src="/images/pattern.svg" // Pode trocar ou remover se não tiver
            alt=""
            fill
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
}
