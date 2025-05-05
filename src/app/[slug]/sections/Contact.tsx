import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <div className="py-15">
      <div className="container mx-auto">
        <div className="w-[60%] mx-auto p-5">
          <h2 className="text-4xl text-[#6A6851] text-center font-bold">
            Quer saber mais? Preencha os dados abaixo que entraremos em contato.
          </h2>

          <div className="bg-white shadow-[0px_5px_25px_-5px_rgba(0,_0,_0,_0.26)] rounded-lg p-10 mt-10">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
