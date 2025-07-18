import {
  Box,
  Card,
  Heading,
  HStack,
  Icon,
  Separator,
  SimpleGrid,
  Text,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { PiQuotesBold } from "react-icons/pi";

const testimonials = [
  {
    name: "Maria Silva",
    location: "Fortaleza",
    occupation: "CEO, TechStart Ltda",
    testimonial:
      "A Ferraz Santos foi fundamental na estruturação jurídica da nossa startup. Profissionalismo e agilidade que fizeram toda a diferença.",
  },
  {
    name: "João Oliveira",
    location: "Sobral",
    occupation: "Diretor, Construtora Horizonte",
    testimonial:
      "Excelente assessoria em contratos empresariais. Conseguiram simplificar processos complexos de forma clara e segura.",
  },
  {
    name: "Ana Costa",
    location: "Juazeiro do Norte",
    occupation: "Sócia, Clínica MedCare",
    testimonial:
      "Suporte jurídico completo durante nossa expansão. Equipe dedicada e sempre disponível para esclarecer dúvidas.",
  },
  {
    name: "Carlos Santos",
    location: "Quixadá",
    occupation: "Fundador, Agro Nordeste",
    testimonial:
      "Prevenção de conflitos que nos poupou tempo e dinheiro. Recomendo para qualquer empresário que busca segurança jurídica.",
  },
  {
    name: "Luiza Mendes",
    location: "Fortaleza",
    occupation: "Diretora, Rede Varejo Plus",
    testimonial:
      "Reestruturação societária conduzida com excelência. Processo transparente e resultados acima das expectativas.",
  },
  {
    name: "Pedro Rocha",
    location: "Sobral",
    occupation: "CEO, LogiTrans",
    testimonial:
      "Parceria de longo prazo que nos dá confiança para tomar decisões estratégicas. Assessoria jurídica de primeira qualidade.",
  },
];

export default function Testimonials() {
  return (
    <VStack
      id="testimonials"
      p={{ base: "5", md: "10" }}
      gap={{ base: "4", md: "10" }}
      width="full"
      bg="#eaebf080"
      justifyContent="center"
    >
      <VStack gap={{ base: "4", md: "8" }} width="full" textAlign="center">
        <Heading
          fontSize={{ base: "4xl", md: "5xl" }}
          fontWeight="700"
          textAlign="center"
        >
          O que nossos clientes dizem
        </Heading>

        <Text fontSize={{ base: "md", md: "xl" }} color="gray.500" maxW="700px">
          A confiança dos nossos clientes é nossa maior conquista. Veja os
          depoimentos de empresários que transformaram seus negócios com nossa
          assessoria
        </Text>
      </VStack>

      <SimpleGrid columns={{ base: 1, md: 3 }} gap="6">
        {testimonials.map(({ name, testimonial, location, occupation }) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card.Root
              variant="outline"
              transition="all 0.3s ease"
              _hover={{
                boxShadow: "2xl",
              }}
            >
              <Card.Header>
                <Box
                  borderRadius="full"
                  gap="2"
                  display="flex"
                  alignItems="center"
                >
                  <Icon as={PiQuotesBold} boxSize={12} color="#2a71d8" />
                  <Box>
                    <Icon as={FaStar} boxSize={4} color="yellow.400" />
                    <Icon as={FaStar} boxSize={4} color="yellow.400" />
                    <Icon as={FaStar} boxSize={4} color="yellow.400" />
                    <Icon as={FaStar} boxSize={4} color="yellow.400" />
                    <Icon as={FaStar} boxSize={4} color="yellow.400" />
                  </Box>
                </Box>
              </Card.Header>

              <Card.Body fontWeight="400">
                <Text mb={4} fontStyle="italic">
                  "{testimonial}"
                </Text>
              </Card.Body>

              <Separator mx="4" />
              <Card.Footer>
                <VStack align="start" gap="0">
                  <Heading size="md" mt={2}>
                    {name}
                  </Heading>
                  <Text fontSize="sm" color="gray.400">
                    {occupation}
                  </Text>
                  <HStack fontSize="sm">
                    <FaLocationDot size={12} color="red" />
                    <Text color="#2a71d8" fontWeight="500">
                      {location}
                    </Text>
                  </HStack>
                </VStack>
              </Card.Footer>
            </Card.Root>
          </motion.div>
        ))}
      </SimpleGrid>

      <Box
        borderRadius="full"
        gap="2"
        display="flex"
        alignItems="center"
        boxShadow="lg"
        bg="#FFF"
        py="2"
        px="4"
      >
        <Box>
          <Icon as={FaStar} boxSize={4} color="yellow.400" />
          <Icon as={FaStar} boxSize={4} color="yellow.400" />
          <Icon as={FaStar} boxSize={4} color="yellow.400" />
          <Icon as={FaStar} boxSize={4} color="yellow.400" />
          <Icon as={FaStar} boxSize={4} color="yellow.400" />
        </Box>

        <Text fontWeight="500">4.9/5 •</Text>
        <Text color="gray.400">+200 avaliações</Text>
      </Box>
    </VStack>
  );
}
