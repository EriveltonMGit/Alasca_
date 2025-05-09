
"use client"; 

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      once: true,   
    });
    // Opcional: Se necessário, adicione AOS.refresh() aqui ou em handlers de rota se usar App Router dinamicamente
    // AOS.refresh();
  }, []);

  return null;
}