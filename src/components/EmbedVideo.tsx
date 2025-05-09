import React, { useState } from "react";
import Image from "next/image";

export interface VideoComponentProps {
  url: string;
  label?: string;
  newBuilding?: boolean;
}

export function EmbedVideo(props: VideoComponentProps) {
  const [isClicked, setIsClicked] = useState(false);
  const urlParts = props.url.split("/");
  const videoId = urlParts[urlParts.length - 1];
  const src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  const thumbnailSrc = `https://img.youtube.com/vi/${videoId}/0.jpg`;
  // const [isMobile, setIsMobile] = useState<boolean>(false);

  // useEffect(() => {
  //   const isWindowMobile = window.innerWidth < 768; // Check if window width is less than 768px
  //   // setIsMobile(isWindowMobile); // Update state with result of check
  // }, []);
  const handleClick = () => {
    setIsClicked(true);
  };
  const videoComponent = isClicked ? (
    <iframe
      id={videoId}
      width="100%"
      height="60%"
      src={src}
      frameBorder="0"
      allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className="min-h-[485px]"
    ></iframe>
  ) : (
    <div className="cursor-pointer relative h-[485px]">
      <Image src={thumbnailSrc} alt="Video thumbnail" fill objectFit="cover" />
      <div
        className="play-icon absolute top-0 bottom-0 m-auto w-full flex justify-center bg-black/50"
        onClick={handleClick}
      >
        <svg
          fill="#fff"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          //   width={auto}
          //   height={auto}
          viewBox="0 0 408.221 408.221"
          xmlSpace="preserve"
          className="w-[100px] text-white transition-all duration-200 ease-in-out hover:scale-[1.1]"
        >
          <g>
            <g>
              <path
                d="M204.11,0C91.388,0,0,91.388,0,204.111c0,112.725,91.388,204.11,204.11,204.11c112.729,0,204.11-91.385,204.11-204.11
			C408.221,91.388,316.839,0,204.11,0z M286.547,229.971l-126.368,72.471c-17.003,9.75-30.781,1.763-30.781-17.834V140.012
			c0-19.602,13.777-27.575,30.781-17.827l126.368,72.466C303.551,204.403,303.551,220.217,286.547,229.971z"
              />
            </g>
          </g>
        </svg>
      </div>
    </div>
  );

  return <div className="relative w-full h-full">{videoComponent}</div>;
}
