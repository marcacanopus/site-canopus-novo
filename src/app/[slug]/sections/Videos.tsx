import { ButtonHTMLAttributes } from "react";
import Slider from "react-slick";
import { EmbedVideo } from "@/components/EmbedVideo";

type Props = {
  videos: {
    link: string;
  }[];
};

const Videos = (props: Props) => {
  const { videos } = props;

  function SampleNextArrow(props: ButtonHTMLAttributes<HTMLButtonElement>) {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 -right-10 translate-y-[-50%] z-90  p-2 cursor-pointer hover:bg-[var(--canopusBlue)]/50 hover:rounded-full transition-all duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          className="text-black"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
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
        className="absolute top-1/2 -left-10 translate-y-[-50%] z-90 p-2 cursor-pointer hover:bg-[var(--canopusBlue)]/50 hover:rounded-full transition-all duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={20}
          height={20}
          fill="currentColor"
          viewBox="0 0 16 16"
          className="text-black"
        >
          <path
            fillRule="evenodd"
            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
          />
        </svg>
      </button>
    );
  };

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto pt-40 pb-20">
        <div className="max-w-[600px] mx-auto mb-12">
          <h2 className="text-5xl text-[var(--canopusBlue)] text-center font-bold mb-5">
            Vídeos
          </h2>
          <p className="text-[#6A6851] text-center">
            Veja todos os detalhes do seu futuro apartamento no Alto da Boa
            Vista, em São Paulo, e apaixone-se!
          </p>
        </div>
        <div className="max-w-[900px] mx-auto">
          <Slider
            {...{
              infinite: false,
              slidesToShow: 1,
              swipeToSlide: true,
              nextArrow: <SampleNextArrow />,
              prevArrow: <SamplePrevArrow />,
            }}
          >
            {videos.map((video, index) => (
              <div key={index}>
                <EmbedVideo url={video.link} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="mt-10 inline-block bg-[var(--primary-color)] text-[#003349] text-sm px-8 py-3 rounded-full border-1 border-[var(--primary-color)] hover:bg-white hover:text-[var(--primary-color)] transition"
          >
            Agende sua visita agora →
          </a>
        </div>
      </div>
    </div>
  );
};

export default Videos;
