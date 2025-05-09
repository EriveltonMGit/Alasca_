import { FaInstagram, FaYoutube, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-[#26160f] text-white px-6 py-12 border-t border-white/20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Descrição */}
        <div>
          <h2 className="text-2xl font-bold mb-3">Depois da Sentença</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            Estratégia, inteligência e prática jurídica para virar sentenças e se destacar como advogado de resultados.
            Transforme sua advocacia com domínio recursal e posicionamento estratégico.
          </p>
        </div>

        {/* Navegação */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Navegação</h3>
          <ul className="space-y-3 text-sm">
            <li><a href="#início" className="hover:text-[#328436] transition-colors">Início</a></li>
            <li><a href="#sobre" className="hover:text-[#328436] transition-colors">Sobre</a></li>
            <li><a href="#secao3" className="hover:text-[#328436] transition-colors">Novidades</a></li>
            <li><a href="#secao4" className="hover:text-[#328436] transition-colors">Professora</a></li>
            <li><a href="#footer" className="hover:text-[#328436] transition-colors">Contato</a></li>
          </ul>
        </div>

        {/* Redes Sociais */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Redes Sociais</h3>
          <div className="flex gap-6 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-[#328436] transition-colors">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-[#328436] transition-colors">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#328436] transition-colors">
              <FaLinkedin />
            </a>
            <a href="mailto:contato@seudominio.com" className="hover:text-[#328436] transition-colors">
              <AiOutlineMail />
            </a>
          </div>
        </div>
      </div>

      {/* Direitos reservados */}
      <div className="text-center text-xs text-gray-400 mt-10">
        &copy; {new Date().getFullYear()} ALASCA S.A - Depois da Sentença. Todos os direitos reservados.
      </div>
    </footer>
  );
}
