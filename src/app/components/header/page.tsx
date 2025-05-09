// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from "react"; // Importe useEffect

import "./header.css";

import SideMenu from "../SideMenu/pages"; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Estado para rastrear se a página foi rolada além do limite
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Efeito para adicionar e remover o listener de scroll
  useEffect(() => {
    const handleScroll = () => {
      // Define o limite de scroll em pixels (ex: 100px)
      const scrollThreshold = 500;
      // Verifica se a posição de scroll vertical é maior que o limite
      const scrolled = window.scrollY > scrollThreshold;

      // Atualiza o estado apenas se ele mudou para evitar re-renderizações desnecessárias
      if (scrolled !== isScrolled) {
        setIsScrolled(scrolled);
      }
    };

    // Adiciona o listener de scroll quando o componente monta
    window.addEventListener("scroll", handleScroll);

    // Limpa o listener de scroll quando o componente desmonta
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isScrolled]); 

  return (
    
    <header className={`container fixed mx-auto top-2 px-[10px] py-[20px] flex justify-between items-center z-900 w-[95%] h-[7vh] sm:h-[5vh] border ${isScrolled ? 'border-gray-200 bg-white/90' : 'border-gray-950 bg-white/10'} backdrop-blur-lg rounded-lg left-0 right-0 transition-colors duration-300`}> {/* Adicionadas classes condicionais de borda/fundo e transição */}
      
      {/* Logo ou título do cabeçalho - também muda de cor */}
      <div className={`${isScrolled ? 'text-black' : 'text-white'} font-bold text-lg transition-colors duration-300`}>Logo</div> 

      {/* Botão do Menu Mobile - também muda de cor */}
      <button
        className={`sm:hidden text-2xl ${isScrolled ? 'text-black' : 'text-white'} `} 
        onClick={toggleMenu}
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
      >
        {isMenuOpen ? "✕" : "☰"}{" "}
      </button>

      {/* Menu Tradicional para Desktop */}
      <nav className={`hidden sm:flex space-x-4 w-[30%] transition-colors duration-300 ${isScrolled ? 'text-black' : 'text-white'}`}> {/* Adicionada classe condicional de cor de texto */}
      
        <a href="#início" className="hover:text-gray-500 transition">
          Início
        </a>
        <a href="#sobre" className="hover:text-gray-500 transition">
          Sobre
        </a>
        <a href="#novidades" className="hover:text-gray-500 transition">
          Novidades
        </a>
        <a href="#professora" className="hover:text-gray-500 transition">
          Professora
        </a>
        <a href="#registro" className="hover:text-gray-500 transition">
         Registro
        </a>
      </nav>

     
      <SideMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </header>
  );
}

export default Header;