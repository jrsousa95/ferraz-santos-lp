# Ferraz Santos Advogados - Landing Page

## Regras Fundamentais

**1. Sempre responda em português** - Toda comunicação, comentários, documentação e mensagens devem ser em português brasileiro.\*\*

**2. Utilize sempre práticas de Clean Code, padrões GOF, SOLID (Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, and Dependency Inversion), KISS (Keep It Simple, Stupid), YAGNI (You Aren't Gonna Need It) e DRY (Don't Repeat Yourself)** - Mantenha o código limpo, com todas as tipagens definidas e sem usar o tipo "any", simples, e siga os princípios fundamentais de engenharia de software.\*\*

**3. Crie um plano de execução antes de começar a criar e editar aquivos e perqunte se pode seguir.**

**4. Para operações grandes de reescrita de código, avalie se é melhor criar novas funções e manter a antiga como referência ou se pode reescrever a função.**

Esta é uma landing page profissional de escritório de advocacia construída com React, TypeScript, Vite e componentes shadcn/ui. O projeto tem como foco clientes brasileiros de direito empresarial com design profissional e confiável.

## Visão Geral da Arquitetura

- **Aplicação de página única** com roteamento simples (`src/pages/Index.tsx` + `NotFound.tsx`)
- **Seções baseadas em componentes**: Header, HeroSection, AreasSection, WhyChooseSection, TestimonialsSection, CTASection, Footer
- **Abordagem de design system**: Cores da marca personalizadas, gradientes e variantes de botões definidas em `tailwind.config.ts` e `src/index.css`
- **Integração shadcn/ui**: Componentes UI em `src/components/ui/` com variantes profissionais personalizadas

## Padrões Específicos da Marca

### Sistema de Cores

- **Cores primárias da marca**: `brand-black` (#1c2026), `brand-blue` (#2a71d8), branco
- **Variáveis CSS personalizadas**: Todas as cores da marca definidas em `src/index.css` com valores HSL
- **Gradientes profissionais**: `bg-gradient-hero`, `bg-gradient-cta` para apelo visual

### Variantes de Botões (src/components/ui/button.tsx)

```tsx
// Variantes de botões profissionais para escritório de advocacia
variant = "cta"; // Botões CTA com gradiente
variant = "whatsapp"; // Botões verdes do WhatsApp
variant = "professional"; // Botões azuis da marca
variant = "outline-professional"; // Botões com contorno da marca
```

### Tipografia e Estilos

- **Fonte**: Roboto (classe `font-roboto`) para aparência profissional
- **Sombras profissionais**: `shadow-professional`, `shadow-card`, `shadow-cta`
- **Transições suaves**: `transition-all duration-300` para efeitos de hover

## Constantes e Configurações Principais

### Integração WhatsApp (src/constants.ts)

```typescript
const whatsappNumber = "5585989411075";
const whatsappMessage = "Olá! Quero saber mais...";
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  whatsappMessage
)}`;
```

### Gerenciamento de Assets

- **Imagens**: Armazenar em `src/assets/` (logo.png, presentation.jpg, ferraz-santos-logo.png)
- **Padrão de importação**: `import logo from "@/assets/presentation.jpg"`

## Fluxo de Desenvolvimento

### Comandos de Build

```bash
npm run dev          # Servidor de desenvolvimento (localhost:8080)
npm run build        # Build de produção
npm run build:dev    # Build em modo de desenvolvimento
npm run lint         # Verificação ESLint
```

### Padrão de Criação de Componentes

1. **Componentes de seção**: Diretamente em `src/components/` (ex: `HeroSection.tsx`)
2. **Componentes UI**: Usar shadcn/ui em `src/components/ui/`
3. **Estilização**: Combinar classes Tailwind com variáveis personalizadas da marca
4. **Ícones**: Usar `lucide-react` (Phone, Scale, ArrowRight, etc.)

### Integração Lovable

- **Deploy automático**: Mudanças via plataforma Lovable fazem commit automático
- **Marcação de componentes**: Plugin `lovable-tagger` em modo de desenvolvimento
- **Projeto na nuvem**: URL no README.md para edição direta

## Estrutura do Layout

A página principal (`src/pages/Index.tsx`) segue esta ordem de seções:

1. Header (fixo, com CTA do WhatsApp)
2. HeroSection (tela cheia com imagem de fundo)
3. AreasSection (áreas de atuação)
4. WhyChooseSection (diferenciais)
5. TestimonialsSection (depoimentos de clientes)
6. CTASection (chamada para ação)
7. Footer (informações de contato)

Cada seção usa elementos HTML5 semânticos e segue princípios de design responsivo mobile-first.
