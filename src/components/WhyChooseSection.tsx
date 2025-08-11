import { Target, Shield, TrendingUp, Users, Clock, Award } from "lucide-react";

const WhyChooseSection = () => {
  const differentials = [
    {
      icon: Target,
      title: "Especificidade nos Serviços",
      description:
        "Expertise exclusiva em Direito Empresarial, garantindo soluções precisas e eficazes para seu negócio.",
    },
    {
      icon: Shield,
      title: "Prevenção de Conflitos",
      description:
        "Estruturamos estratégias preventivas que evitam litígios e protegem seus interesses empresariais.",
    },
    {
      icon: TrendingUp,
      title: "Consultoria de Investimentos",
      description:
        "Assessoria jurídica para decisões de investimento, fusões, aquisições e expansão empresarial.",
    },
    {
      icon: Users,
      title: "Atendimento Personalizado",
      description:
        "Cada cliente recebe atenção dedicada com soluções customizadas para suas necessidades específicas.",
    },
    {
      icon: Clock,
      title: "Agilidade e Eficiência",
      description:
        "Processos otimizados e comunicação transparente para resultados rápidos e eficientes.",
    },
    {
      icon: Award,
      title: "Excelência Comprovada",
      description:
        "Histórico de sucesso com empresas de diversos portes em todo o Brasil.",
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Por que escolher a
            <span className="text-brand-blue"> Ferraz Santos</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nossa abordagem combina expertise técnica, visão estratégica e
            atendimento humanizado para entregar resultados excepcionais aos
            nossos clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentials.map((differential, index) => (
            <div
              key={index}
              className="group p-6 rounded-xl hover:shadow-professional transition-all duration-300 hover:bg-gray-50 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-cta rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <differential.icon className="h-7 w-7 text-white" />
              </div>

              <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                {differential.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {differential.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-hero rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">+10</div>
              <div className="text-white/80">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-white/80">Empresas Atendidas</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-white/80">Cidades de Atuação</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="text-white/80">Taxa de Sucesso</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
