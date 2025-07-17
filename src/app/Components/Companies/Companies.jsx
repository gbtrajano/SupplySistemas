const Companies = () => {
  return (
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div class="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 class="mb-4 text-4xl tracking-tight font-bold text-gray-900 dark:text-white">
            Atuando em mais de <span class="font-extrabold">20</span> empresas
            atualmente.
          </h2>
          <p class="mb-4 font-light">
            Construímos parcerias sólidas com mais de duas dezenas de empresas,
            auxiliando-as a navegar no cenário digital com confiança. Nossa
            abordagem colaborativa permite desenvolver plataformas robustas e
            automações sob medida, liberando o potencial de cada negócio e
            garantindo escalabilidade e eficiência a longo prazo.
          </p>
          <p class="mb-4 font-medium">
            Nosso sucesso é medido pelo sucesso de nossos clientes,
            impulsionando a transformação digital em diversos segmentos.
          </p>
          <a
            href="#"
            class="inline-flex items-center font-medium text-[#f03612] hover:text-primary-800 dark:text-primary-500 dark:hover:text-primary-700"
          >
            Saiba mais
            <svg
              class="ml-1 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Companies;
