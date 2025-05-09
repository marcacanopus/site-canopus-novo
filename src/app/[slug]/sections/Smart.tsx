import Image from "next/image";

const Smart = () => {
  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="flex gap-x-6">
          <div className="bg-gray-100 w-[calc(40%-(--spacing(6)))] px-10 py-10">
            <h3 className="text-2xl text-[var(--canopusBlue)] font-bold mb-5">
              Por que ser smart?
            </h3>
            <p className="text-[var(--buildingText)]">
              A linha Today Smart Life é pensada para quem quer ter qualidade de
              vida. São apartamentos bem localizados e acessíveis que vão trazer
              tempo para você fazer o que realmente gosta. Conheça os bairros
              onde estão localizados os apartamentos da linha Today.
            </p>
            <a
              href="#"
              className="mt-10 inline-block bg-[var(--primary-color)] text-[#003349] text-sm px-8 py-3 rounded-full border-1 border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] transition"
            >
              Agende sua visita agora →
            </a>
          </div>
          <div className="w-[calc(60%-(--spacing(6)))] flex flex-wrap gap-2">
            <div className="w-[calc((100%_-_2_*_theme(spacing.2))_/_3)] relative h-full">
              <Image
                src="/site-canopus-novo/images/building/img_localizacao_privilegiada.webp"
                fill
                alt="Localização privilegiada"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 pt-20 pb-6 px-6 bg-linear-to-t from-[var(--canopusBlue)]/100 to-white/0 text-white font-bold">
                <div className="flex flex-col items-center">
                  <Image
                    src="/site-canopus-novo/images/building/icone-local.svg"
                    alt="Localização privilegiada"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <span className="text-lg text-center">
                    Localização privilegiada
                  </span>
                </div>
              </div>
            </div>
            <div className="w-[calc((100%_-_2_*_theme(spacing.2))_/_3)] relative h-full">
              <Image
                src="/site-canopus-novo/images/building/img_preco_acessivel.webp"
                fill
                alt="Localização privilegiada"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 pt-20 pb-6 px-6 bg-linear-to-t from-[var(--canopusBlue)]/100 to-white/0 text-white font-bold">
                <div className="flex flex-col items-center">
                  <Image
                    src="/site-canopus-novo/images/building/icone-preco.svg"
                    alt="Localização privilegiada"
                    width={60}
                    height={60}
                    className="mb-4"
                  />
                  <span className="text-lg text-center">Preço acessível</span>
                </div>
              </div>
            </div>
            <div className="w-[calc((100%_-_2_*_theme(spacing.2))_/_3)] relative h-full">
              <Image
                src="/site-canopus-novo/images/building/img_qualidade_canopus.webp"
                fill
                alt="Localização privilegiada"
                className="object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 pt-20 pb-6 px-6 bg-linear-to-t from-[var(--canopusBlue)]/100 to-white/0 text-white font-bold">
                <div className="flex flex-col items-center">
                  <Image
                    src="/site-canopus-novo/images/building/icone-qualidade.svg"
                    alt="Localização privilegiada"
                    width={45}
                    height={40}
                    className="mb-4"
                  />
                  <span className="text-lg text-center">Qualidade Canopus</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Smart;
