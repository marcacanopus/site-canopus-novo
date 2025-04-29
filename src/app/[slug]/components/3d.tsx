import { useState } from "react";
import Image from "next/image";
import Modal from "@/components/Modal";

const Section3d = () => {
  const [isTourModalOpen, setIsTourModalOpen] = useState<boolean>(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState<boolean>(false);

  return (
    <>
      <section className="w-full py-30 bg-gray-100 bg-[url('/site-canopus-novo/images/building/bg-tour-visita.webp')] bg-cover bg-center">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-between">
            <div className="text-white bg-white/10 backdrop-blur-xs px-5 py-8 shadow-md flex flex-col items-center justify-center border-1 border-white lg:max-w-[350px]">
              <div className="w-[120px] h-[175px] relative mb-8">
                <Image
                  src="/site-canopus-novo/images/building/icone-360.svg"
                  fill
                  alt="Tour 360o"
                />
              </div>
              <h4 className="text-3xl font-bold mb-4">Tour 360°</h4>
              <p className="text-center mb-8">
                Entre virtualmente e veja a sua futura residência para saber
                como é.
              </p>
              <button
                onClick={() => setIsTourModalOpen(!isTourModalOpen)}
                className="text-white cursor-pointer"
              >
                VEJA AGORA{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="inline"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>
              </button>
            </div>
            <div className="text-white bg-white/10 backdrop-blur-xs px-5 py-8 shadow-md flex flex-col items-center justify-center border-1 border-white lg:max-w-[350px]">
              <div className="w-[120px] h-[175px] relative mb-8">
                <Image
                  src="/site-canopus-novo/images/building/icone-vista.svg"
                  fill
                  alt="Vista dos andares"
                  className="mb-8"
                />
              </div>
              <h4 className="text-3xl font-bold mb-4">Vista dos andares</h4>
              <p className="text-center mb-8">
                Veja como será a sua vista em cada andar da sua futura
                residência.
              </p>
              <button
                onClick={() => setIsViewModalOpen(!isViewModalOpen)}
                className="text-white cursor-pointer"
                type="button"
              >
                VEJA AGORA{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  className="inline"
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
        </div>
      </section>
      <Modal isModalOpen={isTourModalOpen} setIsModalOpen={setIsTourModalOpen}>
        <div className="flex justify-center items-center text-white">
          <p className="text-4xl">Tour 360</p>
        </div>
      </Modal>
      <Modal isModalOpen={isViewModalOpen} setIsModalOpen={setIsViewModalOpen}>
        <div className="flex justify-center items-center text-white">
          <p className="text-4xl">Vista dos andares</p>
        </div>
      </Modal>
    </>
  );
};

export default Section3d;
