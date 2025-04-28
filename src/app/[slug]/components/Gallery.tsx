import { useMemo, useState, useEffect, ButtonHTMLAttributes } from "react";
import Image from "next/image";
import Slider, { Settings } from "react-slick";
// import FsLightbox from "fslightbox-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "@/components/Lightbox";

type Props = {
  gallery: {
    title: string;
    items: {
      image: string;
      description: string;
    }[];
  }[];
};

const Gallery = (props: Props) => {
  const [selectedGalleryValue, setSelectedGalleryValue] = useState(
    props.gallery?.[0]?.title
  );
  const [activeTab, setActiveTab] = useState<number>(0);
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  useEffect(() => {
    setSelectedGalleryValue(props.gallery[0]?.title);
  }, [props.gallery]);

  const tabs = useMemo(() => {
    return props.gallery.map((item) => ({
      label: item.title,
      value: item.title,
    }));
  }, [props.gallery]);

  const selectedGalleryItems = useMemo(() => {
    return props.gallery?.find((item) => {
      return item.title === selectedGalleryValue;
    })?.items;
  }, [selectedGalleryValue, props.gallery]);

  const openGallery = (index: number) => {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: index,
    });
  };

  const closeLightbox = () => {
    setLightboxController({ toggler: false, slide: 0 });
  };

  const imagesSrc = useMemo(() => {
    return props.gallery
      ?.find((item) => {
        return item.title === selectedGalleryValue;
      })
      ?.items.map((item) => {
        return { src: item.image, alt: item.description };
      });
  }, [selectedGalleryValue, props.gallery]);

  const SampleNextArrow = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 right-50 translate-y-[-50%] z-90  p-2 cursor-pointer hover:bg-[var(--canopusBlue)]/50 hover:rounded-full transition-all duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={55}
          height={55}
          fill="currentColor"
          className="text-white"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
          />
        </svg>
      </button>
    );
  };

  const SamplePrevArrow = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
    const { onClick } = props;
    return (
      <button
        onClick={onClick}
        className="absolute top-1/2 left-50 translate-y-[-50%] z-90 p-2 cursor-pointer hover:bg-[var(--canopusBlue)]/50 hover:rounded-full transition-all duration-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={55}
          height={55}
          fill="currentColor"
          viewBox="0 0 16 16"
          className="text-white"
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
    <div className="py-15">
      <div className="container mx-auto mb-7">
        <div className="flex items-center justify-between">
          <h2 className="text-4xl text-[#6A6851] font-bold">Galeria</h2>
          <div className="text-sm font-medium text-center">
            <ul className="flex flex-wrap -mb-px">
              {tabs.map((tab, index) => {
                return (
                  <li key={index} className="me-2">
                    <button
                      onClick={() => {
                        setSelectedGalleryValue(tab.value);
                        setActiveTab(index);
                      }}
                      data-active={activeTab === index}
                      className="inline-block p-4 text-[var(--primary-color)] font-bold uppercase cursor-pointer data-[active=true]:text-[#6A6851] data-[active=true]:after:block data-[active=true]:after:w-[50%] data-[active=true]:after:h-[2px] data-[active=true]:after:bg-[#6A6851] data-[active=true]:after:content-[''] data-[active=true]:after:mx-auto hover:text-[#6A6851]"
                    >
                      {tab.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="slider-container">
        <Slider
          {...{
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "300px",
            slidesToShow: 1,
            nextArrow: <SampleNextArrow />,
            prevArrow: <SamplePrevArrow />,
          }}
        >
          {selectedGalleryItems?.map((item, index) => {
            return (
              <div key={index}>
                <div className="h-[600px] relative m-2">
                  <Image
                    src={item.image}
                    alt={item.description}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 pt-20 pb-6 px-6 bg-linear-to-t from-black/100 to-white/0 text-white font-bold">
                    <div className="flex justify-between">
                      <span className="w-[90%]">{item.description}</span>
                      <span
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => openGallery(index)}
                      >
                        Ver mais{" "}
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
                  </div>
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
  );
};

export default Gallery;
