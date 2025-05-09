/* eslint-disable @next/next/no-img-element */
import { FaCrown } from "react-icons/fa";

function About() {
  return (
    <section
      className="relative w-screen min-h-[120vh] flex flex-col lg:block items-center justify-center mt-20 overflow-hidden px-4 py-8"
      id="sobre"
  data-aos="fade-up"
     data-aos-duration="3000"
    >
      {/* Imagem – fixa à esquerda apenas no desktop */}
     <div className="rounded-lg w-full lg:w-[30%] lg:h-[70%] lg:absolute lg:left-0 lg:ml-8 lg:mt-25 overflow-hidden mb-6 lg:mb-0 z-30 shadow-xl">
        <img
          src="/img/Foto19-681x1024.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>

      {/* Texto – posicionado à direita no desktop, abaixo no mobile */}
      <div className="border border-gray-300 rounded-lg w-full lg:w-[64%] lg:h-auto lg:absolute lg:right-0 lg:mt-10 lg:mr-15 p-6 flex flex-col items-center justify-around bg-white/80 backdrop-blur-sm">
        <div className="w-full text-center flex flex-col items-center">
          <FaCrown className="text-[#896254] text-5xl mb-4" />
          <h1 className="text-[24px] md:text-[28px] lg:text-[30px] font-semibold text-[#896254] font-[Proelium] w-[90%]">
            O processo não termina na sentença. É ali que a disputa começa —{" "}
            <span className="text-[#34343b]">
              e é nesse momento que o advogado estratégico se destaca.
            </span>
          </h1>
        </div>

        {/* Texto principal – sem rolagem interna */}
        <div className="text-black text-sm md:text-base font-normal w-full mt-6 space-y-4 lg:max-h-[80vh] lg:overflow-auto p-4">
          <p>
            Enquanto muitos recuam diante de uma decisão desfavorável, quem
            domina os recursos cíveis enxerga o que poucos veem:{" "}
            <b className="text-[#896254]">uma chance de virar o jogo.</b>
          </p>
          <p>
            Foi isso que aprendi ao longo de 14 anos na Procuradoria do Banco
            Central, recorrendo e revisando recursos vindos de todo o país.
          </p>
          <p>
            E é exatamente isso que vou compartilhar com você no{" "}
            <b className="text-[#896254]">Depois da Sentença.</b>
          </p>
          <p>
            Durante essas 3 aulas, eu vou te mostrar o que realmente diferencia
            um advogado comum de um advogado de excelência:
          </p>
          <p>
            Quando recorrer, como estruturar a peça, quais fundamentos usar — e,
            principalmente,{" "}
            <b className="text-[#896254]">
              como transformar o recurso em um instrumento de virada no processo
              e de valorização da sua carreira.
            </b>
          </p>
          <p>
            Se você quer ser reconhecido como um{" "}
            <b className="text-[#896254]">profissional estratégico</b>,
            respeitado pela sua técnica e ser capaz de entregar resultados mesmo
            nos cenários mais difíceis,{" "}
            <b className="text-[#896254]">esse evento foi feito para você</b>.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
