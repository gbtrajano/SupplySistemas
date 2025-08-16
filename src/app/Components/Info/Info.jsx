const Info = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Nós Otimizamos o Que Já Funciona.
          </h2>
          <p className="mb-4">
            Nossa equipe de estrategistas, desenvolvedores e especialistas em
            automação trabalha para entender suas necessidades e aplicar as
            ferramentas certas para otimizar seus processos. Somos ágeis e
            flexíveis, adaptando nossa expertise ao seu ritmo e garantindo a
            entrega de soluções com o escopo que você precisa, no tempo certo.
          </p>
          <p>
            Somos ágeis e flexíveis, adaptando nossa expertise ao seu ritmo e
            garantindo a entrega de soluções com o escopo que você precisa, no
            tempo certo.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img
            className="w-full rounded-lg"
            src="https://placehold.co/400x500/f03612/FFFFFF?text=Foto+1"
            alt="office content 1"
          />
          <img
            className="mt-4 w-full lg:mt-10 rounded-lg"
            src="https://placehold.co/400x500/f03612/FFFFFF?text=Foto+2"
            alt="office content 2"
          />
        </div>
      </div>
    </section>
  );
};

export default Info;
