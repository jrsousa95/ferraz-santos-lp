import {
  Box,
  Card,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { BsPersonCheck } from "react-icons/bs";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { LuTarget } from "react-icons/lu";
import { MdOutlineShield } from "react-icons/md";
import { PiMedalLight } from "react-icons/pi";

const aboutUs = [
  {
    icon: LuTarget,
    title: "Especificidade nos Serviços",
    description:
      "Expertise exclusiva em Direito Empresarial, garantindo soluções precisas e eficazes para seu negócio.",
  },
  {
    icon: MdOutlineShield,
    title: "Prevenção de Conflitos",
    description:
      "Estruturamos estratégias preventivas que evitam litígios e protegem seus interesses empresariais.",
  },
  {
    icon: FaArrowTrendUp,
    title: "Consultoria de Investimentos",
    description:
      "Assessoria jurídica para decisões de investimento, fusões, aquisições e expansão empresarial.",
  },
  {
    icon: BsPersonCheck,
    title: "Atendimento Personalizado",
    description:
      "Cada cliente recebe atenção dedicada com soluções customizadas para suas necessidades específicas.",
  },
  {
    icon: FiClock,
    title: "Agilidade e Eficiência",
    description:
      "Processos otimizados e comunicação transparente para resultados rápidos e eficientes.",
  },
  {
    icon: PiMedalLight,
    title: "Excelência Comprovada",
    description:
      "Histórico de sucesso com empresas de diversos portes em todo o Ceará.",
  },
];

export default function AboutUs() {
  return (
    <VStack
      id="about-us"
      p={{ base: "5", md: "10" }}
      gap={{ base: "4", md: "10" }}
      width="full"
      justifyContent="center"
    >
      <VStack gap={{ base: "4", md: "8" }} width="full" textAlign="center">
        <Heading
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="700"
          textAlign="center"
        >
          Por que escolher a{" "}
          <Heading
            as="span"
            color="#2a71d8"
            fontWeight="700"
            fontSize={{ base: "4xl", md: "5xl" }}
          >
            Ferraz Santos?
          </Heading>
        </Heading>

        <Text fontSize={{ base: "md", md: "xl" }} color="gray.500" maxW="700px">
          Nossa abordagem combina expertise técnica, visão estratégica e
          atendimento humanizado para entregar resultados excepcionais aos
          nossos clientes.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        {aboutUs.map(({ icon, title, description }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card.Root
              variant="outline"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: "2xl",
                fontWeight: 700,
                color: "#2a71d8",
              }}
            >
              <Card.Header>
                <Box
                  borderRadius="full"
                  bg="#2a71d8"
                  boxSize="14"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Icon as={icon} boxSize={7} color="white" />
                </Box>
                <Heading size="xl" mt={2}>
                  {title}
                </Heading>
              </Card.Header>

              <Card.Body color="gray.500" fontWeight="400">
                <Text mb={4}>{description}</Text>
              </Card.Body>
            </Card.Root>
          </motion.div>
        ))}
      </SimpleGrid>

      <Stack
        width="full"
        direction={{ base: "column", md: "row" }}
        bgColor="#2a71d8"
        color="#eaebf0"
        borderRadius="lg"
        py={{ base: "5", md: "10" }}
        px={{ base: "2", md: "20" }}
        justifyContent="space-between"
        gap="8"
        bgGradient="linear(to-r, rgba(12, 99, 230, 0.7), rgba(3, 64, 155, 0.4))"
      >
        <VStack>
          <Heading fontSize="4xl" fontWeight="700">
            +10
          </Heading>
          <Text fontSize="md" fontWeight="400">
            Anos de experiência
          </Text>
        </VStack>
        <VStack>
          <Heading fontSize="4xl" fontWeight="700">
            +500
          </Heading>
          <Text fontSize="md" fontWeight="400">
            Empresas Atendidas
          </Text>
        </VStack>
        <VStack>
          <Heading fontSize="4xl" fontWeight="700">
            4
          </Heading>
          <Text fontSize="md" fontWeight="400">
            Cidades de Atuação
          </Text>
        </VStack>
        <VStack>
          <Heading fontSize="4xl" fontWeight="700">
            98%
          </Heading>
          <Text fontSize="md" fontWeight="400">
            Taxa de Sucesso
          </Text>
        </VStack>
      </Stack>
    </VStack>
  );
}
