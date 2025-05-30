import { useState } from 'react';
import { CustomInput } from '../../components/CustomInput';

function Contact() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    message: '',
    observation: '',
  });

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(contactForm);
    alert("Enviado");
  };

  return (
    <main>
      {/* <section className="max-w-6xl mx-auto flex flex-wrap gap-12"> */}
      <section className="max-w-6xl mx-auto">
        {/* Texto */}
        <div className="flex-1 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">Contato</h1>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <CustomInput
              label="Nome"
              onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
            />
            <CustomInput
              label="Email"
              onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
            />
            <CustomInput
              label="Mensagem"
              onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
            />
            <CustomInput
              label="Observação"
              onChange={(e) => setContactForm({ ...contactForm, observation: e.target.value })}
            />

            <div className='flex gap-2'>
              <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors disabled:opacity-50">
                Enviar
              </button>
              <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-secondary-hover transition-colors disabled:opacity-50">
                Limpar
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
