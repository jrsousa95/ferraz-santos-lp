import { VStack } from "@chakra-ui/react";
import Footer from "./sections/footer";
import Header from "./sections/header";
import AboutUs from "./sections/about-us";
import Presentation from "./sections/presentation-section";
import ServicesSection from "./sections/services-section";
import Testimonials from "./sections/testimonials";
import UrgentOfferSection from "./sections/urgent-offer-section";

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
