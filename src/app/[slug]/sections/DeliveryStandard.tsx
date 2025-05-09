import { ButtonHTMLAttributes, ReactNode, JSX } from "react";
import Slider from "react-slick";
import Image from "next/image";

type Props = {
  gallery: {
    label: string;
    image: string;
  }[];
};

const DeliveryStandard = (props: Props) => {
  const { gallery } = props;

  function SampleNextArrow(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 -right-20 translate-y-[-50%] z-90  p-2 cursor-pointer"
      >
        <svg
          width={55}
          height={55}
          viewBox="0 0 36 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--primary-color)]"
        >
          <path
            d="M1 0.999847L31.7791 31.6047C36.5735 36.399 36.5735 44.1721 31.7791 48.9665L1 79.5713"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  }

  const SamplePrevArrow = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 -left-20 translate-y-[-50%] z-90 p-2 cursor-pointer"
      >
        <svg
          width={55}
          height={55}
          viewBox="0 0 36 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-[var(--primary-color)]"
        >
          <path
            d="M35.375 79.5714L4.59586 48.9666C-0.198533 44.1722 -0.198533 36.3992 4.59586 31.6048L35.375 1"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    );
  };

  const customDots = (dots: ReactNode[]) => {
    return (
      <ul>
        {dots.map((dot, index) => (
          <li
            key={index}
            className={
              (dot as JSX.Element)?.props.className +
              " w-7 h-1 bg-gray-300 [&.slick-active]:bg-[var(--canopusBlue)] rounded inline-block mx-1"
            }
          ></li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <div className="container mx-auto py-20">
        <div className="mb-5">
          <h2 className="text-3xl text-[var(--canopusBlue)] text-center font-bold">
            Confira nosso padrão de entrega da Linha Today
          </h2>
        </div>
        <div className="mx-auto">
          <Slider
            {...{
              infinite: true,
              slidesToShow: 1,
              swipeToSlide: true,
              dots: true,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
              appendDots: customDots,
              dotsClass: "text-center",
            }}
          >
            {gallery.map((item, index) => (
              <div key={index}>
                <p className="text-[#6A6851] text-center text-xl mb-10">
                  {item.label}
                </p>
                <div className="h-[525px] relative m-2">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 pb-3 px-3 bg-linear-to-t from-black/100 to-white/0 text-white font-bold">
                    <div className="flex justify-between gap-5">
                      <span className="flex-1 bg-[var(--canopusBlue)]/90 text-center py-1">
                        Perspectiva
                      </span>
                      <span className="flex-1 bg-[var(--canopusBlue)]/90 text-center py-1">
                        Realidade
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
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

export default DeliveryStandard;
