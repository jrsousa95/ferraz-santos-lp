import { VStack } from "@chakra-ui/react";
import AboutUs from "./components/about-us";
import Footer from "./components/footer";
import Header from "./components/header";
import Presentation from "./components/presentation";
import ServicesSection from "./components/services-section";
import Testimonials from "./components/testimonials";
import UrgentOfferSection from "./components/urgent-offer-section";

export default function App() {
  return (
    <VStack align="start" gap="0">
      <Header />
      <Presentation />
      <ServicesSection />
      <AboutUs />
      <Testimonials />
      <UrgentOfferSection />
      <Footer />
    </VStack>
  );
}
