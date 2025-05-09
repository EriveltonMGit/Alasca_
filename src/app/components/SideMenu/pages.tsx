"use client";

import React from "react";
import "./sideMenu.css";
import { AiOutlineHome, AiOutlineInfoCircle } from "react-icons/ai";

import {
  AiOutlineMail,
} from 'react-icons/ai';
import { FaChalkboardTeacher, FaRegNewspaper } from 'react-icons/fa';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <>
      <div className={`side-menu sm:hidden ${isOpen ? "open" : ""}`}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <nav className="menu-items flex flex-col space-y-4 px-4 text-white">
  <a href="#início" onClick={onClose} className="flex items-center gap-3 text-lg hover:text-yellow-400">
    <AiOutlineHome className="text-xl" />
    Início
  </a>
  <a href="#sobre" onClick={onClose} className="flex items-center gap-3 text-lg hover:text-yellow-400">
    <AiOutlineInfoCircle className="text-xl" />
    Sobre
  </a>
  <a href="#secao3" onClick={onClose} className="flex items-center gap-3 text-lg hover:text-yellow-400">
    <FaRegNewspaper className="text-xl" />
    Novidades
  </a>
  <a href="#secao4" onClick={onClose} className="flex items-center gap-3 text-lg hover:text-yellow-400">
    <FaChalkboardTeacher className="text-xl" />
    Professora
  </a>
  <a href="#footer" onClick={onClose} className="flex items-center gap-3 text-lg hover:text-yellow-400">
    <AiOutlineMail className="text-xl" />
    Contato
  </a>
</nav>

      </div>

      <div
        className={`backdrop sm:hidden ${isOpen ? "open" : ""}`}
        onClick={onClose}
      />
    </>
  );
}

export default SideMenu;
