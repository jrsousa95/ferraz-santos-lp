import bgImage from "@/assets/presentation.jpg";
import { Button, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export default function Presentation() {
  return (
    <VStack
      id="home"
      width="full"
      align="start"
      bg="#2a71d8"
      color="#eaebf0"
      padding="10"
      height="calc(100vh - 68px)"
      justifyContent="center"
      bgGradient="linear(to-r, rgba(42, 113, 216, 0.7), rgba(42, 113, 216, 0.4))"
    >
      <HStack width="full" justifyContent="space-between">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <VStack width="80%" gap="4" textAlign="center">
            <Text fontSize="2xl">Especialistas em Direito Empresarial</Text>
            <Heading fontSize="6xl" fontWeight="700" lineHeight="50px">
              Segurança Jurídica para o Seu Negócio
            </Heading>
            <Text fontSize="2xl">
              Assessoria especializada em Direito Empresarial para empresas de
              todos os portes. Proteja seus ativos e previna conflitos com nossa
              expertise.
            </Text>

            <HStack gap="4">
              <Button
                colorPalette="green"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                }}
              >
                Conversar pelo Whatsapp
              </Button>
              <Button
                colorPalette="blue"
                variant="subtle"
                _hover={{
                  transform: "scale(1.1)",
                  transition: "transform 0.3s ease",
                }}
              >
                Conheça Nossas Áreas
              </Button>
            </HStack>
          </VStack>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={bgImage}
            width="600px"
            height="600px"
            rounded="md"
            alt="Imagem de fundo"
          />
        </motion.div>
      </HStack>
    </VStack>
  );
}
