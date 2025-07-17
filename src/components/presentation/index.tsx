import bgImage from "@/assets/presentation.jpg";
import { Button, Heading, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { GoLaw } from "react-icons/go";

export default function Presentation() {
  return (
    <VStack
      id="home"
      width="full"
      align="start"
      color="#eaebf0"
      padding="0"
      height={{ base: "full", md: "calc(100vh - 68px)" }}
      justifyContent="center"
      bgImage={`linear-gradient(rgba(42, 113, 216, 0.9), rgba(42, 113, 216, 0.9)), url(${bgImage})`}
      backgroundPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgBlendMode="multiply"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        width="full"
        height="full"
        alignItems="center"
        justifyContent="space-between"
      >
        {/* TEXTO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ width: "100%", padding: "40px" }}
        >
          <VStack align="start" gap="4" maxW="700px">
            <HStack>
              <GoLaw size="24px" />
              <Text fontSize={{ base: "md", md: "2xl" }}>
                Especialistas em Direito Empresarial
              </Text>
            </HStack>
            <Heading
              fontSize={{ base: "5xl", md: "6xl" }}
              fontWeight="700"
              lineHeight="50px"
            >
              Segurança Jurídica para o seu negócio
            </Heading>
            <Text fontSize={{ base: "md", md: "2xl" }}>
              Assessoria especializada em Direito Empresarial para empresas de
              todos os portes. Proteja seus ativos e previna conflitos com nossa
              expertise.
            </Text>

            <Stack
              gap="4"
              width="full"
              direction={{ base: "column", md: "row" }}
            >
              <Button
                colorPalette="green"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                }}
                asChild
              >
                <a href="https://www.google.com.br/" target="_blank">
                  Conversar pelo Whatsapp
                </a>
              </Button>

              <Button
                colorPalette="blue"
                variant="subtle"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                }}
                asChild
              >
                <a href="#areas">Conheça Nossas Áreas</a>
              </Button>
            </Stack>
          </VStack>
        </motion.div>
      </Stack>
    </VStack>
  );
}
