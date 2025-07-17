import { VStack } from "@chakra-ui/react";
import Header from "./components/header";
import Presentation from "./components/presentation";
import { ServicesSection } from "./components/services-section";

// #2a71d8
// #1c2023
// #eaebf0

// id = "home";
// id = "about-us";
// id = "testimonials";
// id = "contact";

export default function App() {
  return (
    <VStack align="start" gap="0">
      <Header />

      <Presentation />

      <ServicesSection />
    </VStack>
  );
}
