'use client';

import React from 'react';
import './sideMenu.css';
import { AiOutlineHome, AiOutlineInfoCircle } from 'react-icons/ai';
import { MdOutlineContactPage, MdOutlineViewList } from 'react-icons/md';
import { FaListUl } from 'react-icons/fa';

interface SideMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

function SideMenu({ isOpen, onClose }: SideMenuProps) {
  return (
    <>
      <div className={`side-menu sm:hidden ${isOpen ? 'open' : ''}`}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <nav className="menu-items">
          <a href="#início" onClick={onClose}>
            <AiOutlineHome className="icon" />
            Início
          </a>
          <a href="#sobre" onClick={onClose}>
            <AiOutlineInfoCircle className="icon" />
            Sobre
          </a>
          <a href="#secao3" onClick={onClose}>
            <FaListUl className="icon" />
            Seção 3
          </a>
          <a href="#secao4" onClick={onClose}>
            <MdOutlineViewList className="icon" />
            Seção 4
          </a>
          <a href="#footer" onClick={onClose}>
            <MdOutlineContactPage className="icon" />
            Seção 5
          </a>
        </nav>
      </div>

      <div
        className={`backdrop sm:hidden ${isOpen ? 'open' : ''}`}
        onClick={onClose}
      />
    </>
  );
}

export default SideMenu;
