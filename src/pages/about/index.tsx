function About() {
  return (
    <main>
      {/* <section className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12"> */}
      <section className="max-w-6xl mx-auto flex flex-wrap gap-12">
        {/* Texto */}
        <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Sobre Nós</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem aliquam harum illo ipsam, minus placeat, laboriosam, cumque quo vero quam consectetur ipsum amet itaque omnis aperiam repellendus. Quod, possimus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem aliquam harum illo ipsam, minus placeat, laboriosam, cumque quo vero quam consectetur ipsum amet itaque omnis aperiam repellendus. Quod, possimus!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quidem aliquam harum illo ipsam, minus placeat, laboriosam, cumque quo vero quam consectetur ipsum amet itaque omnis aperiam repellendus. Quod, possimus!</p>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-[400px] shrink-0">
          <img
            src="/assets/black.jpg" // Substitua pelo caminho da sua imagem
            alt="Equipe trabalhando junta"
            className="w-full h-auto rounded-xl shadow-lg object-cover"
          />
        </div>
      </section>
    </main>
  );
}

export default About;
