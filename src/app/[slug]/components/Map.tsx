import Image from "next/image";

const Map = () => {
  return (
    <div className="py-20">
      <div className="container mx-auto">
        <div className="max-w-[900px] mx-auto mb-12">
          <h2 className="text-4xl text-[var(--canopusBlue)] text-center font-bold mb-5">
            Conheça o bairro Alto da Boa Vista
          </h2>
          <p className="text-[#6A6851] text-center">
            Uma ótima localização espera por você no Today Alto da Boa Vista,
            lançamento da Canopus na Zona Sul de São Paulo. A poucos passos da
            Estação de Metrô Alto da Boa Vista, e ao lado da Avenida Santo
            Amaro.
          </p>
        </div>
        <div className="h-full w-full mb-7">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60005.71936094509!2d-44.02825907044676!3d-19.9514638906742!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa697fa02d9c8fd%3A0x4070a0eaf308b890!2sEdif%C3%ADcio%20Century%20Tower!5e0!3m2!1spt-BR!2sbr!4v1745945171260!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[500px] shadow-lg"
          />
        </div>
        <div className="pb-5 border-b-1 border-b-gray-300">
          <div className="columns-8 bg-gray-100 text-[var(--buildingText)]">
            <div className="p-4 cursor-pointer">
              <div className="relative w-[64px] h-[64px] mx-auto mb-3">
                <Image
                  src="/site-canopus-novo/images/building/icone-academia.svg"
                  fill
                  alt="Academia"
                />
              </div>
              <p className="text-sm text-center">Academia</p>
            </div>
            <div className="p-4 cursor-pointer">
              <div className="relative w-[64px] h-[64px] mx-auto mb-3">
                <Image
                  src="/site-canopus-novo/images/building/icone-hospital.svg"
                  fill
                  alt="Academia"
                />
              </div>
              <p className="text-sm text-center">Hospital</p>
            </div>
            <div className="p-4 cursor-pointer">
              <div className="relative w-[64px] h-[64px] mx-auto mb-3">
                <Image
                  src="/site-canopus-novo/images/building/icone-educacao.svg"
                  fill
                  alt="Academia"
                />
              </div>
              <p className="text-sm text-center">Escola</p>
            </div>
            <div className="p-4 cursor-pointer">
              <div className="relative w-[64px] h-[64px] mx-auto mb-3">
                <Image
                  src="/site-canopus-novo/images/building/icone-restaurante.svg"
                  fill
                  alt="Academia"
                />
              </div>
              <p className="text-sm text-center">Restaurante</p>
            </div>
            <div className="p-4 cursor-pointer">
              <div className="relative w-[64px] h-[64px] mx-auto mb-3">
                <Image
                  src="/site-canopus-novo/images/building/icone-farmacia.svg"
                  fill
                  alt="Academia"
                />
              </div>
              <p className="text-sm text-center">Famácia</p>
            </div>
            <div className="p-4 cursor-pointer">
              <div className="relative w-[64px] h-[64px] mx-auto mb-3">
                <Image
                  src="/site-canopus-novo/images/building/icone-parque.svg"
                  fill
                  alt="Academia"
                />
              </div>
              <p className="text-sm text-center">Parque</p>
            </div>
            <div className="p-4 cursor-pointer">
              <div className="relative w-[64px] h-[64px] mx-auto mb-3">
                <Image
                  src="/site-canopus-novo/images/building/icone-shopping.svg"
                  fill
                  alt="Academia"
                />
              </div>
              <p className="text-sm text-center">Shopping</p>
            </div>
            <div className="p-4 cursor-pointer">
              <div className="relative w-[64px] h-[64px] mx-auto mb-3">
                <Image
                  src="/site-canopus-novo/images/building/icone-padaria.svg"
                  fill
                  alt="Academia"
                />
              </div>
              <p className="text-sm text-center">Padaria</p>
            </div>
          </div>
        </div>
        <div className="columns-3 gap-10 text-[var(--buildingText)] pt-15">
          <div className="border-1 border-[var(--primary-color)] shadow-md">
            <div className="relative w-full h-[300px]">
              <Image
                src="/site-canopus-novo/images/1.webp"
                fill
                alt="Allianz Parque"
                className="object-cover"
              />
            </div>
            <div className="text-center text-xl font-semibold p-2">
              Allianz Parque
            </div>
          </div>
          <div className="border-1 border-[var(--primary-color)] shadow-md">
            <div className="relative w-full h-[300px]">
              <Image
                src="/site-canopus-novo/images/2.webp"
                fill
                alt="Allianz Parque"
                className="object-cover"
              />
            </div>
            <div className="text-center text-xl font-semibold p-2">
              Parque da Água Branca
            </div>
          </div>
          <div className="border-1 border-[var(--primary-color)] shadow-md">
            <div className="relative w-full h-[300px]">
              <Image
                src="/site-canopus-novo/images/3.webp"
                fill
                alt="Allianz Parque"
                className="object-cover"
              />
            </div>
            <div className="text-center text-xl font-semibold p-2">
              Bourbon Shopping Padaria
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="mt-15 inline-block bg-[var(--primary-color)] text-[#003349] text-sm px-8 py-3 rounded-full border-1 border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] transition"
          >
            Agende sua visita agora →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Map;
