import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { whatsappUrl } from "@/constants";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 fixed w-full top-0 z-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="Ferraz Santos Advogados"
              className="h-24 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#areas"
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Áreas de atuação
            </a>
            <a
              href="#sobre"
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Sobre nós
            </a>
            <a
              href="#depoimentos"
              className="text-gray-700 hover:text-brand-blue transition-colors"
            >
              Depoimentos
            </a>
          </nav>

          {/* CTA Button */}
          <Button variant="whatsapp" size="sm" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Phone className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
