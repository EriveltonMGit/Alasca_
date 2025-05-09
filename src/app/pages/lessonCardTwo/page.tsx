/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

function LessonCardTwo() {
  return (
    <section className="w-full bg-white px-6 py-16 mt-15 flex items-center justify-center" id="cardtwo"
    data-aos="fade-up"
     data-aos-duration="2000"
    >
      <main className="flex flex-col lg:flex-row w-full max-w-screen-xl lg:h-[90vh] overflow-hidden">
        {/* Texto à esquerda */}
        <div className="lg:w-1/2 w-full bg-[#f5f5f5] p-8 flex flex-col justify-center text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-[#896254] mb-4">
            Conheça sua professora
          </h1>
          <p className="text-sm md:text-base text-black mb-4">
            Luciana Lima é Procuradora do Banco Central e atua há mais de 14 anos com recursos cíveis, com forte presença nos tribunais superiores. Atualmente, conduz a defesa da Autarquia em ações coletivas e em casos estratégicos junto ao STF e ao STJ, tendo participado do julgamento de precedentes relevantes na Corte Especial do STJ.
          </p>
          <p className="text-sm md:text-base text-black mb-4">
            É especialista em Direito Processual Civil e professora da disciplina na Universidade do Banco Central (UniBC).
          </p>
          <p className="text-sm md:text-base text-black mb-4">
            No evento Depois da Sentença, ela vai mostrar como aplicar técnica e estratégia na fase recursal — com foco no que realmente faz diferença para virar processos e se posicionar como um advogado de resultado.
          </p>
        </div>

        {/* Imagem à direita */}
        <div className="lg:w-1/2 w-full h-auto lg:h-full flex justify-center items-center">
          <img
            src="/img/Foto8-copiar-1483x1536.webp"
            alt="Imagem de Luciana Lima"
            className="w-full h-auto lg:h-full object-contain lg:object-cover"
          />
        </div>
      </main>
    </section>
  );
}

export default LessonCardTwo;
