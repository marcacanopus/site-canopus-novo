import Image from "next/image";

type Props = {
  logo: string;
  name: string;
};

const About = (props: Props) => {
  return (
    <>
      <div className="bg-gray-100">
        <div className="container mx-auto border-b-1 border-b-[var(--secondary-color)]">
          <div className="columns-5">
            <div className="px-5 py-8 text-[var(--secondary-color)] text-center">
              150m2
            </div>
            <div className="px-5 py-8 text-[var(--secondary-color)] text-center">
              4 quartos
            </div>
            <div className="px-5 py-8 text-[var(--secondary-color)] text-center">
              2 semissuítes
            </div>
            <div className="px-5 py-8 text-[var(--secondary-color)] text-center">
              5 vagas
            </div>
            <div className="px-5 py-8 text-[var(--secondary-color)] text-center">
              2 suítes
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container mx-auto pt-10">
          <div className="flex">
            <div className="w-[15%]">
              <Image
                src={props.logo}
                width={100}
                height={116}
                objectFit="contain"
                alt={props.name}
              />
            </div>
            <div className="w-[50%]">
              <p className="">
                Um novo lançamento da Linha Today Smart Life chegou ao Alto da
                Boa Vista para você que deseja morar ou investir em um
                empreendimento residencial completo. Tenha a melhor localização,
                várias áreas de lazer e um condomínio com estrutura completa.
                Tudo isso a um preço acessível. Agende hoje mesmo uma visita ao
                apartamento decorado!
              </p>
              <div className="bg-gray-100">
                <a href="#">Veja a ficha técnica</a>
                <a href="#">Download do ebook</a>
                <a href="#">Vídeo de produto</a>
              </div>
            </div>
            <div className="w-[35%]">
              <div>
                <span>Mensais a partir de</span>
                <span>R$ 2.000,00</span>
                <span>*consulte condições</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
