import Link from "next/link";

type Props = {
  name: string;
};

const Breadcrumb = (props: Props) => {
  return (
    <div className="border-t-1 border-t-[var(--primary-color)] py-5">
      <div className="container mx-auto">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li className="inline-flex items-center">
              <Link
                href="/"
                className="ms-1 text-[#6A6851] hover:text-[var(--canopusBlue)] md:ms-2"
              >
                Página inicial
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-[#6A6851] mx-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
                <Link
                  href="/empreendimentos"
                  className="ms-1 text-[#6A6851] hover:text-[var(--canopusBlue)] md:ms-2"
                >
                  Imóveis
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="currentColor"
                  className="text-[#6A6851] mx-5"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
                  />
                </svg>
                <span className="ms-1 text-[var(--primary-color)] md:ms-2">
                  {props.name}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;
