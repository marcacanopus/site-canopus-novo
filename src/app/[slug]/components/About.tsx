import Image from "next/image";

type Props = {
  logo: string;
  name: string;
  address: string;
};

const About = (props: Props) => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto border-b-1 border-b-[var(--secondary-color)]">
          <div className="columns-5">
            <div className="px-5 py-8 text-[#6A6851] text-center">150m2</div>
            <div className="px-5 py-8 text-[#6A6851] text-center">
              4 quartos
            </div>
            <div className="px-5 py-8 text-[#6A6851] text-center">
              2 semissuítes
            </div>
            <div className="px-5 py-8 text-[#6A6851] text-center">5 vagas</div>
            <div className="px-5 py-8 text-[#6A6851] text-center">2 suítes</div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto py-12">
          <div className="flex">
            <div className="w-[15%]">
              <Image
                src={props.logo}
                width={100}
                height={116}
                alt={props.name}
              />
            </div>
            <div className="w-[50%]">
              <p className="text-[#6A6851] leading-[1.7] pb-7">
                Um novo lançamento da Linha Today Smart Life chegou ao Alto da
                Boa Vista para você que deseja morar ou investir em um
                empreendimento residencial completo. Tenha a melhor localização,
                várias áreas de lazer e um condomínio com estrutura completa.
                Tudo isso a um preço acessível. Agende hoje mesmo uma visita ao
                apartamento decorado!
              </p>
              <div className="bg-gray-100 flex justify-between text-[#003349] text-sm">
                <a href="#" className="p-4 flex items-center">
                  Veja a ficha técnica{" "}
                  <Image
                    src="/site-canopus-novo/icons/seta.svg"
                    alt="Seta"
                    width={12}
                    height={8}
                    className="ms-1"
                  />
                </a>
                <a href="#" className="p-4 flex items-center">
                  Download do ebook
                  <Image
                    src="/site-canopus-novo/icons/seta.svg"
                    alt="Seta"
                    width={12}
                    height={8}
                    className="ms-1"
                  />
                </a>
                <a href="#" className="p-4 flex items-center">
                  Vídeo de produto
                  <Image
                    src="/site-canopus-novo/icons/seta.svg"
                    alt="Seta"
                    width={12}
                    height={8}
                    className="ms-1"
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  className="mt-8 inline-block bg-[var(--primary-color)] text-[#003349] text-sm px-8 py-3 rounded-full border-1 border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] transition"
                >
                  Agende sua visita agora →
                </a>
              </div>
            </div>
            <div className="w-[35%] ps-8">
              <div className="border-s-15 border-[var(--primary-color)] ps-3">
                <span className="block text-sm font-bold">
                  Mensais a partir de
                </span>
                <span className="block text-5xl text-[#003349] font-bold">
                  R$ 2.000,00
                </span>
                <span className="block text-xs">*consulte condições</span>
              </div>
              <div className="flex text-[#6A6851] text-xl mt-5">
                <Image
                  src="/site-canopus-novo/icons/icone-local.svg"
                  alt="Local"
                  width={23}
                  height={34}
                  className="me-3"
                />
                {props.address}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
