import {
  Box,
  Button,
  Card,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaBuilding, FaFileAlt, FaSyncAlt } from "react-icons/fa";

const services = [
  {
    icon: FaBuilding,
    title: "Direito Societário",
    description:
      "Planejamento, estruturação e elaboração de contratos para uma organização corporativa sólida e segura.",
    items: [
      "Constituição de empresas",
      "Alterações contratuais",
      "Fusões e aquisições",
      "Planejamento societário",
    ],
  },
  {
    icon: FaFileAlt,
    title: "Contratos Empresariais",
    description:
      "Elaboração de contratos claros, personalizados e juridicamente seguros que facilitam o dia a dia da sua empresa.",
    items: [
      "Contratos de prestação de serviços",
      "Contratos de fornecimento",
      "Contratos de distribuição",
      "Acordos de confidencialidade",
    ],
  },
  {
    icon: FaSyncAlt,
    title: "Reestruturação Empresarial",
    description:
      "Gestão de contingências empresariais e tratamento de passivos em disputas judiciais.",
    items: [
      "Recuperação judicial",
      "Dissolução de sociedades",
      "Liquidação de empresas",
      "Gestão de crises",
    ],
  },
];

export function ServicesSection() {
  return (
    <VStack
      id="areas"
      p={{ base: "5", md: "10" }}
      gap={{ base: "4", md: "10" }}
      width="full"
      justifyContent="center"
    >
      <VStack gap={{ base: "4", md: "8" }} width="full">
        <Heading fontSize={{ base: "4xl", md: "5xl" }} textAlign="center">
          Áreas de atuação
        </Heading>

        <Text fontSize={{ base: "md", md: "xl" }} color="gray.500">
          Oferecemos soluções jurídicas completas para empresas que buscam
          segurança e crescimento sustentável em seus negócios.
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        {services.map(({ icon, title, description, items }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card.Root
              variant="outline"
              cursor="pointer"
              transition="all 0.3s ease"
              _hover={{
                transform: "scale(1.05)",
                borderColor: "#2a71d8",
                fontWeight: 700,
                color: "#2a71d8",
                "& > div:last-of-type button": {
                  bg: "#2a71d8",
                  color: "white",
                  borderColor: "#2a71d8",
                  _hover: {
                    bg: "#2a71d8",
                  },
                },
              }}
            >
              <Card.Header textAlign="center" alignItems="center">
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

                <Box
                  as="ul"
                  listStyleType="disc"
                  listStylePosition="inside"
                  pl={2}
                  mb={4}
                >
                  {items.map((item, idx) => (
                    <Box
                      as="li"
                      key={idx}
                      mb={1}
                      _marker={{ color: "#2a71d8" }}
                    >
                      {item}
                    </Box>
                  ))}
                </Box>
              </Card.Body>

              <Card.Footer justifyContent="center">
                <Button
                  colorPalette="blue"
                  variant={{ base: "solid", md: "surface" }}
                  size="sm"
                  width="full"
                  transition="all 0.7s ease"
                >
                  Ver mais →
                </Button>
              </Card.Footer>
            </Card.Root>
          </motion.div>
        ))}
      </SimpleGrid>

      <Text fontSize={{ base: "md", md: "xl" }} color="gray.500">
        Precisa de uma consulta personalizada sobre sua situação específica?
      </Text>

      <HStack>
        <Button colorPalette="blue" size="lg" width="full" asChild>
          <a href="https://www.google.com.br/" target="_blank">
            Agendar Consulta
          </a>
        </Button>
      </HStack>
    </VStack>
  );
}
