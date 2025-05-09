
// AQUI FICA AS IMPORTAÇÕES QUE SERÃO RENDERIZADAS 

import Header from "./components/header/page";
import LesseonCard from "./pages/lessonCard/page";
import About from "./pages/about/page";
import Hero from "./pages/home/page"; 
import LessonCardTwo from "./pages/lessonCardTwo/page";
import WhatsappFloatingButton from "./components/WhatsappFloatingButton/page";
import Registro from "./pages/registro/pages";
import Footer from "./pages/Footer/page";


export default function Home() {
  // Adicione 'return' aqui!
  return (
    <>
    {/* Header */}
    <Header></Header>
      {/* Hero */}
      <Hero></Hero>
      {/* About */}
      <About></About>
      {/* LesseonCard */}
      <LesseonCard></LesseonCard>
      {/* LessonCardTwo */}
      <LessonCardTwo></LessonCardTwo>
      {/* Footer */}
       <Registro></Registro>
       {/* :WhatsappFloatingButton */}
       <WhatsappFloatingButton phoneNumber={"61991599450"}></WhatsappFloatingButton>
       {/* Footer */}
       <Footer></Footer>
    </>
  );
}
