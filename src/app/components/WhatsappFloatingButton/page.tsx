// src/components/WhatsappFloatingButton.tsx
"use client";

import { FaWhatsapp } from 'react-icons/fa';
import React from 'react';

interface WhatsappFloatingButtonProps {
  phoneNumber: string;
  message?: string;
  params?: Record<string, never>;
  searchParams?: Record<string, never>;
}

export default function WhatsappFloatingButton({ phoneNumber, message }: WhatsappFloatingButtonProps) {
  const whatsappLink = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

  return (
    <a
      href={whatsappLink}
      className="
        fixed
        bottom-5
        right-5
        z-100
        bg-[#25d366]
        text-white
        rounded-[10px]
        w-14 h-14
        flex items-center justify-center
        shadow-lg
        transition ease-in-out duration-300
        hover:scale-110
        cursor-pointer
        text-4xl
        max-sm:bottom-4
        max-sm:right-4
        max-sm:w-[50px] max-sm:h-[50px]
        max-sm:text-3xl
      "
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}