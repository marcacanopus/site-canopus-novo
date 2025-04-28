import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import Slider from "react-slick";
import Lightbox from "@/components/Lightbox";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {
  plans: {
    title: string;
    items: {
      image: string;
      description: string;
    }[];
  }[];
};

const Plans = (props: Props) => {
  const [selectedPlanValue, setSelectedPlanValue] = useState(
    props.plans?.[0]?.title
  );
  const [activeTab, setActiveTab] = useState<number>(0);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  const tabs = useMemo(() => {
    return props.plans.map((item) => ({
      label: item.title,
      value: item.title,
    }));
  }, [props.plans]);

  const selectedPlanItems = useMemo(() => {
    return props.plans?.find((item) => {
      return item.title === selectedPlanValue;
    })?.items;
  }, [selectedPlanValue, props.plans]);

  const imagesSrc = useMemo(() => {
    return props.plans
      ?.find((item) => {
        return item.title === selectedPlanValue;
      })
      ?.items.map((item) => {
        return { src: item.image, alt: item.description };
      });
  }, [selectedPlanValue, props.plans]);

  useEffect(() => {
    setSelectedPlanValue(props.plans[0]?.title);
  }, [props.plans]);

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
    <div className="pt-7">
      <div className="container mx-auto border border-[var(--primary-color)] px-6 py-7">
        <div className="flex">
          <div className="w-1/5 border-e-1 border-gray-400 pe-6 h-[500px] overflow-y-auto">
            <p className="text-[var(--foreground)] font-bold mb-5">
              Escolha a planta que você deseja ver:
            </p>
            {tabs.map((plan, index) => (
              <button
                key={index}
                data-active={activeTab === index}
                className="relative text-[#999998] text-start font-bold border w-full mb-3 p-4 cursor-pointer data-[active=true]:border-gray-200 data-[active=true]:bg-gray-200 data-[active=true]:text-[gray-700] data-[active=true]:before:content-[''] data-[active=true]:before:border-t-7 data-[active=true]:before:border-t-transparent data-[active=true]:before:border-b-7 data-[active=true]:before:border-b-transparent data-[active=true]:before:border-s-7 data-[active=true]:before:border-s-gray-200 data-[active=true]:before:absolute data-[active=true]:before:left-[100%] data-[active=true]:before:top-1/2 data-[active=true]:before:-translate-y-1/2 hover:bg-gray-200 hover:text-[gray-700]"
                onClick={() => {
                  setSelectedPlanValue(plan.value);
                  setActiveTab(index);
                }}
              >
                {plan.label}
              </button>
            ))}
          </div>
          <div className="w-4/5 ps-6">
            <Slider
              {...{
                infinite: true,
                slidesToShow: 1,
                slidesToScroll: 1,
              }}
            >
              {selectedPlanItems?.map((item, index) => {
                return (
                  <div key={index} className="w-full h-[500px] relative">
                    <div className="absolute top-0 left-0 right-0 px-6 text-[var(--primary-color)] text-end z-99">
                      <span
                        className="text-sm flex justify-end items-center gap-2 cursor-pointer"
                        onClick={() => openGallery(index)}
                      >
                        Veja a planta{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          fill="currentColor"
                          className="bi bi-zoom-in"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fillRule="evenodd"
                            d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11M13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0"
                          />
                          <path d="M10.344 11.742q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1 6.5 6.5 0 0 1-1.398 1.4z" />
                          <path
                            fillRule="evenodd"
                            d="M6.5 3a.5.5 0 0 1 .5.5V6h2.5a.5.5 0 0 1 0 1H7v2.5a.5.5 0 0 1-1 0V7H3.5a.5.5 0 0 1 0-1H6V3.5a.5.5 0 0 1 .5-.5"
                          />
                        </svg>
                      </span>
                    </div>
                    <Image
                      src={item.image}
                      alt={item.description}
                      fill
                      className="object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 pt-20 pb-6 px-6 bg-linear-to-t from-black/100 to-white/0 text-white font-bold">
                      <span className="w-[90%]">{item.description}</span>
                    </div>
                  </div>
                );
              })}
            </Slider>
            {lightboxController.toggler && (
              <Lightbox
                onClose={closeLightbox}
                urls={imagesSrc!}
                currentIndex={lightboxController.slide}
              />
            )}
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center">
        <a
          href="#"
          className="mt-8 inline-block bg-[var(--primary-color)] text-[#003349] text-sm px-8 py-3 rounded-full border-1 border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] transition"
        >
          Agende sua visita agora →
        </a>
      </div>
    </div>
  );
};

export default Plans;
