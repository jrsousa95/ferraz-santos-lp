import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Stack,
  Status,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BiSolidOffer } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { GoAlertFill } from "react-icons/go";

export default function UrgentOfferSection() {
  return (
    <Box
      bgGradient="to-r"
      gradientFrom="blue.400"
      gradientTo="blue.500"
      color="white"
      py={16}
      px={4}
      width="full"
    >
      <VStack gap={4} mx="auto" textAlign="center">
        {/* Título */}
        <Heading
          fontSize={{ base: "2xl", md: "5xl" }}
          lineHeight={{ base: "unset", md: "50px" }}
          maxW="800px"
          fontWeight="bold"
        >
          NÃO ESPERE A CRISE CHEGAR. <br />
          GARANTA A SUA SEGURANÇA JURÍDICA AGORA
        </Heading>

        {/* Subtítulo */}
        <Text fontSize="md" opacity={0.9}>
          Cada dia sem assessoria jurídica adequada é um risco para seu negócio.
          Problemas jurídicos podem custar milhares e comprometer anos de
          trabalho.
        </Text>

        {/* Blocos de riscos */}
        <Stack
          direction={{ base: "column", md: "row" }}
          gap={6}
          pt={6}
          justify="center"
          align="stretch"
        >
          <Box
            bg="#2a71d850"
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.300"
            p={4}
            flex="1"
          >
            <HStack gap={2} mb={2}>
              <Box color="yellow.400">
                <GoAlertFill fontSize={32} />
              </Box>
              <Text fontWeight="bold" color="yellow.400">
                Sem Contratos
              </Text>
            </HStack>
            <Text fontSize="md" textAlign="left" opacity={0.9}>
              Acordos verbais podem gerar disputas milionárias
            </Text>
          </Box>

          <Box
            bg="#2a71d850"
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.300"
            p={4}
            flex="1"
          >
            <HStack gap={2} mb={2}>
              <Box color="yellow.400">
                <GoAlertFill fontSize={32} />
              </Box>
              <Text fontWeight="bold" color="yellow.400">
                Estrutura Frágil
              </Text>
            </HStack>
            <Text fontSize="md" textAlign="left" opacity={0.9}>
              Sociedade mal estruturada pode levar à dissolução
            </Text>
          </Box>

          <Box
            bg="#2a71d850"
            borderRadius="md"
            border="1px solid"
            borderColor="whiteAlpha.300"
            p={4}
            flex="1"
          >
            <HStack gap={2} mb={2}>
              <Box color="yellow.400">
                <GoAlertFill fontSize={32} />
              </Box>
              <Text fontWeight="bold" color="yellow.400">
                Sem Prevenção
              </Text>
            </HStack>
            <Text fontSize="md" textAlign="left" opacity={0.9}>
              Problemas jurídicos podem parar suas operações
            </Text>
          </Box>
        </Stack>

        {/* Oferta Especial */}
        <Box
          border="1px solid"
          borderColor="whiteAlpha.300"
          borderRadius="md"
          p={6}
          mt={10}
          w="100%"
          maxW="800px"
        >
          <HStack justify="center" mb={3}>
            <BiSolidOffer size={32} />
            <Text fontWeight="bold" fontSize="2xl">
              Oferta Especial: Primeira Consulta Gratuita
            </Text>
          </HStack>
          <Text fontSize="md" mb={4} opacity={0.9}>
            Avaliação completa da situação jurídica da sua empresa + plano de
            ação personalizado
          </Text>
          <Flex justify="center">
            <Button
              colorPalette="green"
              fontWeight="bold"
              px={6}
              size="lg"
              boxShadow="md"
              _hover={{
                transform: "scale(1.1)",
                transition: "transform 0.3s ease",
              }}
              asChild
            >
              <a href="https://wa.me/message/Y2BY6LNHEASPG1" target="_blank">
                <FaWhatsapp /> WhatsApp - Consulta Gratuita
              </a>
            </Button>
          </Flex>
        </Box>

        {/* Garantias */}
        <HStack gap={6} pt={6} fontSize="sm" color="whiteAlpha.800">
          <Text>
            <Status.Root colorPalette="green">
              <Status.Indicator />
            </Status.Root>{" "}
            Resposta em até 1 hora
          </Text>
          <Text>
            <Status.Root colorPalette="green">
              <Status.Indicator />
            </Status.Root>{" "}
            Consulta 100% gratuita
          </Text>
          <Text>
            <Status.Root colorPalette="green">
              <Status.Indicator />
            </Status.Root>{" "}
            Sem compromisso
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
