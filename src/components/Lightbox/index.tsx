import React, { useEffect, useState, MouseEvent } from "react";
import styles from "./Lightbox.module.css";
interface LightboxProps {
  urls: {
    src: string;
    alt: string;
  }[];
  currentIndex: number;
  onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ urls, currentIndex, onClose }) => {
  const [currentSlide, setCurrentSlide] = useState(currentIndex);
  const [isZoomed, setIsZoomed] = useState(false);
  const [fadeClass, setFadeClass] = useState("");
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setFadeClass(styles["fade-enter"]);
    const timeout = setTimeout(() => {
      setFadeClass("");
    }, 200);
    return () => clearTimeout(timeout);
  }, [currentSlide]);

  useEffect(() => {
    const loadImage = (
      src: string
    ): Promise<{ width: number; height: number }> => {
      return new Promise((resolve) => {
        const img = new window.Image();
        img.onload = () => {
          const ratio = Math.min(
            (0.9 * window.innerWidth) / img.naturalWidth,
            (0.9 * window.innerHeight) / img.naturalHeight
          );
          resolve({
            width: img.naturalWidth * ratio,
            height: img.naturalHeight * ratio,
          });
        };
        img.src = src;
      });
    };

    loadImage(urls[currentSlide].src).then((dimensions) => {
      setImgDimensions(dimensions);
    });
  }, [currentSlide, urls]);

  const handlePrev = () => {
    setFadeClass(styles["fade-exit"]);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : urls.length - 1));
    }, 200);
  };

  const handleNext = () => {
    setFadeClass(styles["fade-exit"]);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev < urls.length - 1 ? prev + 1 : 0));
    }, 200);
  };

  const toggleZoom = (e: MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setZoomPosition({ x, y });
    }
    setIsZoomed((prev) => !prev);
  };

  return (
    <div className={styles.lightboxOverlay}>
      <div className={styles.header}>
        <span>
          {currentSlide + 1} / {urls.length}
        </span>
        <div className={styles.lightboxCard}>{urls[currentSlide].alt}</div>
        <div onClick={onClose}>
          <button
            title="Fechar"
            className="text-black bg-white rounded-lg p-2 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={16}
              height={16}
              fill="currentColor"
              className="bi bi-x-lg"
              viewBox="0 0 16 16"
            >
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
        </div>
      </div>
      <div className={styles.lightboxContent}>
        <div
          className={`${styles.imageContainer} ${fadeClass}`}
          onClick={toggleZoom}
        >
          <img
            src={urls[currentSlide].src}
            className={isZoomed ? styles.zoomed : ""}
            alt={`Slide ${currentSlide + 1}`}
            style={
              isZoomed
                ? { transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%` }
                : {}
            }
            width={imgDimensions.width}
            height={imgDimensions.height}
          />
        </div>
      </div>
      <div className={styles.prevButton} onClick={handlePrev}>
        <button
          title="Voltar para o slide anterior"
          className="text-black bg-white rounded-lg p-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8"
            />
          </svg>
        </button>
      </div>

      <div className={styles.nextButton} onClick={handleNext}>
        <button
          title="Ir para o próximo slide"
          className="text-black bg-white rounded-lg p-2 cursor-pointer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            fill="currentColor"
            className="bi bi-arrow-right"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Lightbox;
