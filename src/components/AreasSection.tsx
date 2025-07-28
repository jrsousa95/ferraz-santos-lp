import { Building2, FileText, RefreshCw, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { whatsappUrl } from "@/constants";

const AreasSection = () => {
  const areas = [
    {
      icon: Building2,
      title: "Direito Societário",
      description:
        "Planejamento, estruturação e elaboração de contratos para uma organização corporativa sólida e segura.",
      features: [
        "Resolução de conflitos",
        "Alterações contratuais",
        "Fusões e aquisições",
        "Planejamento societário",
      ],
    },
    {
      icon: FileText,
      title: "Contratos Empresariais",
      description:
        "Elaboração de contratos claros, personalizados e juridicamente seguros que facilitam o dia a dia da sua empresa.",
      features: [
        "Contratos de prestação de serviços",
        "Contratos de fornecimento",
        "Contratos de distribuição",
        "Acordos de confidencialidade",
      ],
    },
    {
      icon: RefreshCw,
      title: "Reestruturação Empresarial",
      description:
        "Gestão de contingências empresariais e tratamento de passivos em disputas judiciais.",
      features: [
        "Recuperação judicial",
        "Dissolução de sociedades",
        "Liquidação de empresas",
        "Gestão de crises",
      ],
    },
  ];

  return (
    <section id="areas" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Áreas de atuação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos soluções jurídicas completas para empresas que buscam
            segurança e crescimento sustentável em seus negócios.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {areas.map((area, index) => (
            <Card
              key={index}
              className="group hover:shadow-professional transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-card"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-cta rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <area.icon className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-brand-black group-hover:text-brand-blue transition-colors">
                  {area.title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <CardDescription className="text-gray-600 text-base mb-6 leading-relaxed">
                  {area.description}
                </CardDescription>

                <ul className="space-y-2 mb-6">
                  {area.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-gray-700"
                    >
                      <div className="w-2 h-2 bg-brand-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button
                  variant="outline-professional"
                  className="w-full group-hover:bg-brand-blue group-hover:text-white transition-all duration-300 font-roboto"
                >
                  Ver mais
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Precisa de uma consulta personalizada sobre sua situação específica?
          </p>

          <Button variant="professional" size="lg" className="px-8" asChild>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              Agendar Consulta Gratuita
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AreasSection;
