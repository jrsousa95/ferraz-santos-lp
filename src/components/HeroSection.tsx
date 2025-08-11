import { ArrowRight, Scale } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/presentation.jpg";
import { whatsappUrl } from "@/constants";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={logo}
          alt="Dr. Ferraz Santos - Advogado Empresarial"
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/70 to-brand-blue/50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-6">
            <Scale className="h-8 w-8 text-white" />
            <span className="text-white/90 font-medium text-lg">
              Especialistas em Direito Empresarial
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight font-roboto">
            Segurança Jurídica
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              para o seu negócio
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl leading-relaxed font-roboto">
            Assessoria especializada em Direito Empresarial para empresas de
            todos os portes. Proteja seus ativos e previna conflitos com nossa
            expertise.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Button
              variant="whatsapp"
              size="lg"
              className="text-lg px-8 py-4 font-roboto"
              asChild
            >
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                Conversar pelo WhatsApp
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>

            <Button
              variant="outline-professional"
              size="lg"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-brand-blue"
              asChild
            >
              <a href="#areas">Conheça Nossas Áreas</a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>+10 anos de experiência</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>+200 clientes atendidos em mais de 15 estados</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Especialistas em Direito Empresarial</span>
            </div>
          </div>
        </div>
      </div>

      {/* Floating elements for visual appeal */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 left-10 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl"></div>
    </section>
  );
};

export default HeroSection;
