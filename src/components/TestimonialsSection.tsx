import { Star, MessageSquareQuote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Javier Gallego",
      role: "Diretor Consórcio, Wai Seta Caucaia",
      content:
        "A Ferraz Santos foi fundamental na estruturação jurídica da nossa startup. Profissionalismo e agilidade que fizeram toda a diferença.",
      rating: 5,
      city: "Caucaia",
    },
    {
      name: "Paulo Veras",
      role: "Gestor, Wai Life Soluções Ambientais",
      content:
        "Excelente assessoria em contratos empresariais. Conseguiram simplificar processos complexos de forma clara e segura.",
      rating: 5,
      city: "Fortaleza",
    },
    {
      name: "Iran Capistrano",
      role: "Capistrano Atacarejo",
      content:
        "Suporte jurídico completo durante nossa expansão. Equipe dedicada e sempre disponível para esclarecer dúvidas.",
      rating: 5,
      city: "Fortaleza",
    },
    {
      name: "⁠Fernando Ferreira",
      role: "FJ Motos e Carros",
      content:
        "Prevenção de conflitos que nos poupou tempo e dinheiro. Recomendo para qualquer empresário que busca segurança jurídica.",
      rating: 5,
      city: "Fortaleza",
    },
    {
      name: "⁠Joeliton Fialho",
      role: "JF Frontais",
      content:
        "Reestruturação societária conduzida com excelência. Processo transparente e resultados acima das expectativas.",
      rating: 5,
      city: "Fortaleza",
    },
    {
      name: "⁠Fernando Rodrigues",
      role: "Doce Solero Representações",
      content:
        "Parceria de longo prazo que nos dá confiança para tomar decisões estratégicas. Assessoria jurídica de primeira qualidade.",
      rating: 5,
      city: "Fortaleza",
    },
  ];

  return (
    <section id="depoimentos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A confiança dos nossos clientes é nossa maior conquista. Veja os
            depoimentos de empresários que transformaram seus negócios com nossa
            assessoria.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-card hover:shadow-professional transition-all duration-300 transform hover:-translate-y-1 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MessageSquareQuote className="h-8 w-8 text-brand-blue mr-2" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>

                <div className="border-t pt-4">
                  <p className="font-semibold text-brand-black group-hover:text-brand-blue transition-colors">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600 mb-1">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-brand-blue font-medium">
                    📍 {testimonial.city}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <span className="text-brand-black font-semibold">4.9/5</span>
            <span className="text-gray-600">• +200 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
