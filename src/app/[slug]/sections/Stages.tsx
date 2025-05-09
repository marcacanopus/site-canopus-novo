import { useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import Stage from "../components/Stage";
import Lightbox from "@/components/Lightbox";

type Props = {
  stages: {
    images?: {
      src: string;
      alt: string;
    }[];
  };
};

const Stages = (props: Props) => {
  const { images } = props.stages!;
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const openGallery = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
  };

  const closeLightbox = () => {
    setLightboxController({ toggler: false, slide: 0 });
  };

  return (
    <div className="bg-gray-100 bg-[url('/site-canopus-novo/images/building/bg_estagios_obra.webp')] bg-cover bg-center">
      <div className="container mx-auto py-20">
        <h2 className="text-5xl text-white text-center font-bold mb-8">
          Estágios da obra
        </h2>

        <div className="flex gap-x-6">
          <div className="w-[calc(25%-(--spacing(6)))]">
            <Stage
              title="Total da Obra Concluída"
              image="/site-canopus-novo/images/building/icone-ap-completo.svg"
              percentage="77.82"
              isMainCard
            />
          </div>
          <div className="w-[calc(75%-(--spacing(6)))]">
            <div className="flex flex-wrap gap-6 h-full">
              <div className="w-[calc(33.33%-(--spacing(6)))] h-1/4">
                <Stage
                  title="Fundação"
                  image="/site-canopus-novo/images/building/icone-fundacao.svg"
                  percentage="100"
                  cardScale={"scale-50"}
                  imgHeight={"h-20"}
                />
              </div>
              <div className="w-[calc(33.33%-(--spacing(6)))] h-1/4">
                <Stage
                  title="Estrutura"
                  image="/site-canopus-novo/images/building/icone-estrutura.svg"
                  percentage="56"
                  cardScale={"scale-50"}
                  imgHeight={"h-20"}
                />
              </div>
              <div className="w-[calc(33.33%-(--spacing(6)))] h-1/4">
                <Stage
                  title="Alvenaria"
                  image="/site-canopus-novo/images/building/icone-alvenaria.svg"
                  percentage="98"
                  cardScale={"scale-50"}
                  imgHeight={"h-20"}
                />
              </div>
              <div className="w-[calc(33.33%-(--spacing(6)))] h-1/4">
                <Stage
                  title="Instalações"
                  image="/site-canopus-novo/images/building/icone-instalacoes.svg"
                  percentage="74"
                  cardScale={"scale-50"}
                  imgHeight={"h-20"}
                />
              </div>
              <div className="w-[calc(33.33%-(--spacing(6)))] h-1/4">
                <Stage
                  title="Acabamento"
                  image="/site-canopus-novo/images/building/icone-acabamento.svg"
                  percentage="61"
                  cardScale={"scale-50"}
                  imgHeight={"h-20"}
                />
              </div>
              <div className="w-[calc(33.33%-(--spacing(6)))] h-1/4">
                <Stage
                  title="Fachada"
                  image="/site-canopus-novo/images/building/icone-fachada.svg"
                  percentage="71"
                  cardScale={"scale-50"}
                  imgHeight={"h-20"}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 -mb-38">
          <Slider
            {...{
              infinite: true,
              slidesToShow: 6,
              swipeToSlide: true,
            }}
          >
            {images &&
              images.map((image, index) => (
                <div key={index}>
                  <div className="h-[150px] relative m-1">
                    <Image
                      src={image.src}
                      fill
                      alt={image.alt}
                      className="object-cover"
                      onClick={() => openGallery(index)}
                    />
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
      {lightboxController.toggler && (
        <Lightbox
          onClose={closeLightbox}
          urls={images!}
          currentIndex={lightboxController.slide}
        />
      )}
    </div>
  );
};

export default Stages;
