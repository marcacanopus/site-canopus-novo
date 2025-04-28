const ContactForm = () => {
  return (
    <form className="flex flex-col">
      <div className="mb-4 w-full">
        <label
          htmlFor="name"
          className="block text-sm/6 text-[var(--secondary-color)]"
        >
          Nome
        </label>
        <input
          id="name"
          type="text"
          className="w-full border border-[var(--secondary-color)] rounded-xs p-3"
        />
      </div>
      <div className="mb-4 w-full">
        <label
          htmlFor="email"
          className="block text-sm/6 text-[var(--secondary-color)]"
        >
          E-mail
        </label>
        <input
          id="email"
          type="email"
          className="w-full border border-[var(--secondary-color)] rounded-xs p-3"
        />
      </div>
      <div className="mb-4 w-full">
        <label
          htmlFor="phone"
          className="block text-sm/6 text-[var(--secondary-color)]"
        >
          Telefone
        </label>
        <input
          id="phone"
          type="text"
          className="w-full border border-[var(--secondary-color)] rounded-xs p-3"
        />
      </div>
      <div className="flex mb-4">
        <input type="checkbox" name="accept_terms" id="accept_terms" />
        <div className="ml-2 text-xs/4 text-[var(--secondary-color)]">
          <label htmlFor="accept_terms">
            Aceito ser contatado(a) pelo Grupo Canopus nos canais de contato que
            forneci, para os fins previstos na Política de Privacidade.*
          </label>
        </div>
      </div>
      <button className="text-white uppercase font-semibold bg-[var(--primary-color)] p-4 rounded-xs cursor-pointer hover:bg-[var(--secondary-color)] transition duration-300 ease-in-out">
        Quero saber mais
      </button>
    </form>
  );
};

export default ContactForm;
