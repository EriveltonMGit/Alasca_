
// AQUI FICA AS IMPORTAÇÕES QUE SERÃO RENDERIZADAS 

import Header from "./components/header/page";
import LesseonCard from "./pages/lessonCard/page";
import About from "./pages/about/page";
import Hero from "./pages/home/page"; 
import LessonCardTwo from "./pages/lessonCardTwo/page";
import Footer from "./pages/footer/pages";
import WhatsappFloatingButton from "./components/WhatsappFloatingButton/page";

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
       <Footer></Footer>
       {/* :WhatsappFloatingButton */}
       <WhatsappFloatingButton phoneNumber={"61991599450"}></WhatsappFloatingButton>
    </>
  );
}
