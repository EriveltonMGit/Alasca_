"use client";

import { VelocityScroll } from "@/app/components/Scroll-based-velocity/scroll-based-velocity";
import React from "react";

function LessonCard() {
  const cards = [
    {
      id: 1,
      date: "12/05, às 19h",
      title: "Como ter seu recurso admitido?",
      description:
        "Antes de discutir o mérito, o recurso precisa ser admitido. Nessa aula, você vai entender o papel da admissibilidade como filtro processual e aprender a evitar os erros mais comuns que impedem seu recurso de sequer ser analisado.",
      items: [
        "Os requisitos legais e práticos que garantem a admissibilidade do recurso",
        "Como evitar falhas técnicas e reforçar sua argumentação com precedentes",
        "O que pode levar seu recurso a ser rejeitado de forma sumária — e como prevenir isso",
      ],
    },
    {
      id: 2,
      date: "13/05, às 19h",
      title:
        "Apelação cível na prática: tudo que você precisa saber (e ninguém te ensinou)",
      description:
        "Nesta aula, vamos direto ao ponto: você vai entender quando e como usar a apelação de forma estratégica, indo além dos modelos prontos e aprendendo como os tribunais realmente analisam a peça.",
      items: [
        "Quando cabe apelação, quais os requisitos e efeitos práticos",
        "Como organizar os fundamentos e valorizar os primeiros parágrafos da peça",
        "O que fazer para aumentar suas chances de êxito no julgamento do tribunal",
      ],
    },
    {
      id: 3,
      date: "14/05, às 19h",
      title:
        "Embargos de declaração: como convencer o julgador da necessidade de integrar a decisão",
      description:
        "Os embargos são a porta de entrada para recursos maiores — e ainda são subestimados. Nessa aula, você vai dominar essa ferramenta para corrigir falhas, abrir caminho para REsp/RE e evitar decisões irrecorríveis.",
      items: [
        "Quando embargar, como argumentar e o que evitar na redação da peça",
        "Técnicas para provocar o prequestionamento de forma estratégica",
        "Casos práticos e erros comuns que tornam o recurso ineficaz",
      ],
    },
  ];

  return (
    <>
       <VelocityScroll
  className="text_scroll"
  text="Depois da sentença · Recurso cível estratégico · Prática jurídica avançada · Advocacia de resultado · Inteligência recursal · Técnicas de apelação · Processo civil na prática · Sentença não é o fim · Domine os tribunais · Decisões reformadas"
/>

      {/* AQUI FICA O SVG DO TOP BOTTOM */}
      <div className="svg_top mb-[-3vh]" 
     >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#26160f"
            fillOpacity="1"
            d="M0,128L120,138.7C240,149,480,171,720,170.7C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
      <section
        className="w-screen min-h-screen bg-[#26160f] py-10 px-4 flex flex-col items-center justify-center gap-6  "
        id="novidades"
        
    
      >
        <h1 className="text-2xl font-bold text-white text-center">
          O que você vai aprender:
        </h1>
        <main className="flex flex-wrap justify-center gap-6 w-full">
          {cards.map((card) => (
            <div
              key={card.id}
              className="w-full sm:w-[45%] md:w-[30%] lg:w-[28%] bg-white rounded-lg shadow-md p-6 flex flex-col gap-4 min-h-[80vh] flex-grow"
            >
              <span className="text-sm text-[#896254] font-semibold">
                {card.date}
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-[#26160f]">
                {card.title}
              </h2>
              <p className="text-sm text-gray-800">{card.description}</p>
              <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
                {card.items.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </main>
      </section>
        {/* AQUI FICA O SVG DO TOP BOTTOM */}
      <div className="svg_top rotate-180 mt-[-4vh]" 
     >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#26160f"
            fillOpacity="1"
            d="M0,128L120,138.7C240,149,480,171,720,170.7C960,171,1200,149,1320,138.7L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </div>
    </>
  );
}

export default LessonCard;
