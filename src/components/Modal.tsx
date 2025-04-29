type Props = {
  isModalOpen: boolean;
  setIsModalOpen: (isModalOpen: boolean) => void;
  children?: React.ReactNode;
};

const Modal = (props: Props) => {

    const { isModalOpen, setIsModalOpen, children } = props;

  return (
    <>
      {isModalOpen && (
        <div
          tabIndex={-1}
          className="fixed top-0 left-0 right-0 z-99 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
        >
          <div className="relative w-full h-full max-h-full">
            {/* Modal content */}
            <div className="relative h-full bg-white shadow-sm dark:bg-gray-700">
              {/* Modal header */}
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto mt-4 me-4 inline-flex justify-center items-center cursor-pointer"
                  onClick={() => setIsModalOpen(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* Modal body */}
              {children}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
