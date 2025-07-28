import { MapPin, Phone, Mail, Clock } from "lucide-react";
import logo from "@/assets/ferraz-santos-logo.png";

const Footer = () => {
  const whatsappNumber = "5585989411075";
  const whatsappMessage =
    "Olá! Gostaria de mais informações sobre os serviços jurídicos.";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-4 lg:px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="mb-6">
              <img
                src={logo}
                alt="Ferraz Santos Advogados"
                className="h-12 w-auto filter brightness-0 invert"
              />
            </div>
            <p className="text-white/80 mb-6 leading-relaxed">
              Especialistas em Direito Empresarial oferecendo segurança jurídica
              e assessoria estratégica para empresas de todos os portes no
              Ceará.
            </p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Online agora</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm">Resposta rápida</span>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contato</h3>
            <div className="space-y-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5" />
                <span>(85) 9 8941-1075</span>
              </a>
              <a
                href="mailto:contatoferrazsantos@gmail.com"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5" />
                <span>contatoferrazsantos@gmail.com</span>
              </a>
              <div className="flex items-center gap-3 text-white/80">
                <Clock className="h-5 w-5" />
                <span>Seg-Sex: 8h às 18h</span>
              </div>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-xl font-bold mb-6">Onde Atuamos</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5" />
                <span>Fortaleza</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5" />
                <span>Sobral</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5" />
                <span>Juazeiro do Norte</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="h-5 w-5" />
                <span>Quixadá</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm">
            © 2024 Ferraz Santos Advogados. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Política de Privacidade
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-white text-sm transition-colors"
            >
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
