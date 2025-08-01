import { ArrowRight, Phone, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappUrl } from "@/constants";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 right-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 bg-red-500/20 border border-red-300/30 rounded-full px-4 py-2 mb-8">
            <AlertTriangle className="h-5 w-5 text-red-300" />
            <span className="text-red-100 font-medium">
              Ação Urgente Necessária
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight font-roboto">
            NÃO ESPERE A CRISE CHEGAR.
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300">
              GARANTA A SUA SEGURANÇA JURÍDICA AGORA
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed font-roboto">
            Cada dia sem assessoria jurídica adequada é um risco para seu
            negócio. Problemas jurídicos podem custar milhares e comprometer
            anos de trabalho.
          </p>

          {/* Risk indicators */}
          <div className="grid md:grid-cols-3 gap-6 mb-12 text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 font-bold text-2xl mb-2">
                ⚠️ Sem Contratos
              </div>
              <p className="text-white/80">
                Acordos verbais podem gerar disputas milionárias
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 font-bold text-2xl mb-2">
                ⚠️ Estrutura Frágil
              </div>
              <p className="text-white/80">
                Sociedade mal estruturada pode levar à dissolução
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-yellow-400 font-bold text-2xl mb-2">
                ⚠️ Sem Prevenção
              </div>
              <p className="text-white/80">
                Problemas jurídicos podem parar suas operações
              </p>
            </div>
          </div>

          {/* Main CTA */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              🎯 Oferta Especial: Primeira Consulta Gratuita
            </h3>
            <p className="text-white/90 mb-6">
              Avaliação completa da situação jurídica da sua empresa + plano de
              ação personalizado
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="cta"
                size="lg"
                className="text-xl px-10 py-4 bg-green-600 hover:bg-green-700"
                asChild
              >
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                  <Phone className="h-6 w-6" />
                  Consulta Gratuita
                  <ArrowRight className="h-6 w-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-white/70 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Resposta em até 1 hora</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Consulta 100% gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Sem compromisso</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
