"use client";

import { FiDollarSign } from "react-icons/fi";
import { AiOutlineCalendar } from "react-icons/ai";
import { FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="w-full bg-[#26160f] text-white py-10 px-4 flex flex-col items-center" id="footer"
data-aos="fade-up"
     data-aos-duration="2000"
    >
      <div className="max-w-4xl w-full text-center mb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Preencha o formulário abaixo e garanta o seu lugar.
        </h2>
      </div>

      {/* Informações do evento */}
      <div className="w-[50%]  max-w-4xl flex flex-col sm:flex-row sm:space-x-4 divide-y sm:divide-y-0 sm:divide-x divide-white items-center justify-around text-sm md:text-base lg:text-lg mb-8 text-center">
        <span className="flex items-center justify-center px-2 py-2 sm:py-0">
          <FiDollarSign className="mr-2 text-xl md:text-1xl text-[#896254]" />
          <p className="text-sm">Evento online e gratuito</p>
        </span>
        <span className="flex items-center justify-center px-2 py-2 sm:py-0">
          <AiOutlineCalendar className="mr-2 text-xl md:text-1xl text-[#896254]" />
         <p className="text-sm"> 12, 13 e 14 de maio, às 19h</p> 
        </span>
        <span className="flex items-center justify-center px-2 py-2 sm:py-0">
          <FaYoutube className="mr-2 text-xl md:text-1xl text-[#896254]" />
         <p className="text-sm">Ao vivo no YouTube</p> 
        </span>
      </div>

      {/* Formulário */}
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md px-6 py-8 text-black">
        <form className="flex flex-col space-y-4 font-sans">
          <input
            type="text"
            placeholder="Digite seu nome completo"
            className="p-3 rounded bg-white border border-gray-400 placeholder:text-gray-500 focus:outline-none text-sm"
          />
          <input
            type="email"
            placeholder="Digite seu e-mail completo"
            className="p-3 rounded bg-white border border-gray-400 placeholder:text-gray-500 focus:outline-none text-sm"
          />
          <input
            type="tel"
            placeholder="Digite seu telefone"
            className="p-3 rounded bg-white border border-gray-400 placeholder:text-gray-500 focus:outline-none text-sm"
          />
          <button
            type="submit"
            className="bg-[#328436] hover:bg-[#31aa7a] cursor-pointer text-white font-bold py-3 rounded transition duration-300"
          >
            QUERO ME INSCREVER
          </button>
        </form>
      </div>
    </footer>
  );
}

export default Footer;
