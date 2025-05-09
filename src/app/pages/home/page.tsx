/* eslint-disable @next/next/no-img-element */

// IMPORT CSS
import "./Hero.css";
import "../../styles/colors.css";
import { FaYoutube } from "react-icons/fa";
import { FiDollarSign } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
function Hero() {
  return (
    <>
      <section
        className="container_hero  flex w-full overflow-hidden pt-6 md:pt-10 bg-[#26160f] sm:h-[100vh] lg:h-[100vh] xl:h-[100vh] min-h-screen"
        id="início"
    
      >
        {/* Imagem visível somente no desktop */}
        <img
          src="/img/BGPC.webp"
          alt="imagem da advogada"
          className="hidden lg:block w-full z-30"
         data-aos="zoom-out-up"   data-aos-delay="1000"
        />
        <div className="container_blur "></div>
        {/* Imagem visível somente em dispositivos móveis */}
        <img
          src="/img/img_device.png"
          alt="imagem da advogada"
          className="img_device  block lg:hidden w-[100%] mx-auto h-[45vh]"
        />
        <main
          className="container_info_ w-full md:w-[90%] lg:w-[60%] xl:w-[45%]
       flex flex-col space-y-1
       items-start px-4 md:px-6 mt-15
       absolute top-auto bottom-0 lg:top-0 lg:bottom-auto z-90
       
       "
       data-aos="zoom-out-up"   data-aos-delay="1000"
        >
          <div className="w-full h-auto p-2">
            <img
              src="/img/Depois-da-Sentenca-claro-1536x658.webp"
              alt=""
              className="w-[50%] md:w-[30%] lg:w-[7vw] "
            />
            <h1 className="text-[22px] md:text-[28px] lg:text-[32px] text-white font-[Proelium] leading-tight mt-2">
              A maioria dos advogados para na sentença.
              <span className="block md:inline text-[var(--wp--preset--color--vivid-title)]">
                Os que vencem sabem que o jogo começa no recurso.
              </span>
            </h1>
          </div>

          <div className="text-sm md:text-base w-full flex items-start px-2">
            <p className="text-white w-full text-left">
              Aprenda a usar os recursos cíveis com inteligência, segurança e
              estratégia para virar processos e se posicionar como advogado de
              resultado.
            </p>
          </div>

          <div className="w-full flex-col z-90">
            <div className="w-full px-2 py-3 text-white flex items-start justify-start">
              <div className="flex flex-col sm:flex-row sm:space-x-4 divide-y sm:divide-y-0 sm:divide-x divide-white items-start sm:items-center text-sm md:text-base lg:text-lg gap-1 sm:gap-0">
                <span className="flex items-center px-2 text-left">
                  <FiDollarSign className="inline mr-2 text-xl md:text-2xl text-[var(--wp--preset--color--vivid-title)]" />
                  Evento online e gratuito
                </span>
                <span className="flex items-center px-2 text-left">
                  <AiOutlineCalendar className="inline mr-2 text-xl md:text-2xl text-[var(--wp--preset--color--vivid-title)]" />
                  12, 13 e 14 de maio, às 19h
                </span>
                <span className="flex items-center px-2 text-left">
                  <FaYoutube className="inline mr-2 text-xl md:text-2xl text-[var(--wp--preset--color--vivid-title)]" />
                  Ao vivo no YouTube
                </span>
              </div>
            </div>

            <div className="w-full px-2 pb-4 text- z-90">
              <form className="flex flex-col space-y-3 w-full font-sans z-90">
                <input
                  type="text"
                  placeholder="Digite seu nome completo"
                  className="p-2 rounded bg-white border border-black placeholder:text-gray-500 focus:outline-none font-normal text-sm"
                />
                <input
                  type="email"
                  placeholder="Digite seu e-mail completo"
                  className="p-2 rounded bg-white border border-black placeholder:text-gray-500 focus:outline-none font-normal text-sm"
                />
                <input
                  type="tel"
                  placeholder="Digite seu telefone"
                  className="p-2 rounded bg-white border border-black placeholder:text-gray-500 focus:outline-none font-normal text-sm"
                />
                <button
                  type="submit"
                  className="cursor-pointer z-50 font-bold text-white py-3 px-4 rounded hover:bg-[var(--wp--preset--color--light-green-cyan)] transition bg-[var(--wp--preset--color--vivid-green-cyan)]"
                >
                  QUERO ME INSCREVER
                </button>
              </form>
            </div>
          </div>
        </main>
      </section>
      {/* AQUI FICA O SVG DO TOP BOTTOM */}
<div className="svg_bottom ">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
    <path
      fill="#26160f"
      fillOpacity="1" // Altere de fill-opacity para fillOpacity
      d="M0,128L120,138.7C240,149,480,171,720,170.7C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
    ></path>
  </svg>
</div>
    </>
  );
}

export default Hero;
