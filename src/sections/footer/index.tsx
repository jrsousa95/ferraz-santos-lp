import Logo from "@/assets/logo-icon.png";
import {
  Box,
  Flex,
  HStack,
  Icon,
  Image,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Footer() {
  return (
    <Box
      id="contact"
      bgColor="#2a71d8"
      bgGradient="linear(to-r, rgba(12, 99, 230, 0.7), rgba(3, 64, 155, 0.4))"
      width="full"
      color="white"
      py={8}
      px={6}
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-between"
        align={{ base: "flex-start", md: "center" }}
        maxW="1200px"
        mx="auto"
        gap={8}
      >
        {/* Coluna 1 - Sobre */}
        <VStack align="flex-start" gap={3} flex={1}>
          <Image src={Logo} w="40px" h="40px" />
          <Text fontSize="sm">
            Especialistas em Direito Empresarial oferecendo segurança jurídica e
            assessoria estratégica para empresas de todos os portes no Ceará.
          </Text>
          <HStack gap={4} fontSize="sm">
            <HStack gap={1}>
              <Box w="8px" h="8px" bg="green.400" borderRadius="full" />
              <Text>Online agora</Text>
            </HStack>
            <HStack gap={1}>
              <Box w="8px" h="8px" bg="green.400" borderRadius="full" />
              <Text>Resposta rápida</Text>
            </HStack>
          </HStack>
        </VStack>

        {/* Coluna 2 - Contato */}
        <VStack align="flex-start" gap={3} flex={1}>
          <Text fontWeight="bold">Contato</Text>
          <HStack>
            <Icon as={MdOutlineWhatsapp} boxSize={4} />
            <Text>(85) 9 8941-1075</Text>
          </HStack>
          <HStack>
            <Icon as={FiMail} boxSize={4} />
            <Text>contatoferrazsantos@gmail.com</Text>
          </HStack>
          <HStack>
            <Icon as={FaClock} boxSize={4} />
            <Text>Seg-Sex: 8h às 18h</Text>
          </HStack>
        </VStack>

        {/* Coluna 3 - Onde Atuamos */}
        <VStack align="flex-start" gap={3} flex={1}>
          <Text fontWeight="bold">Onde Atuamos</Text>
          {[
            "Fortaleza e Região Metropolitana",
            "Sobral, Juazeiro do Norte",
            "Quixadá",
          ].map((city) => (
            <HStack key={city}>
              <Icon as={FaLocationDot} boxSize={4} />
              <Text>{city}</Text>
            </HStack>
          ))}
        </VStack>
      </Flex>

      <Box borderTop="1px solid" borderColor="whiteAlpha.300" mt={8} pt={4}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-between"
          align="center"
          maxW="1200px"
          mx="auto"
          fontSize="sm"
        >
          <Text>
            © 2025 Ferraz Santos Advogados. Todos os direitos reservados.
          </Text>
          <Text>
            Desenvolvido por:{" "}
            <Link
              color="white"
              _hover={{ textDecoration: "underline" }}
              target="_blank"
              href="https://www.linkedin.com/in/eudes-jr/"
            >
              Eudes Junior
            </Link>
          </Text>
          <HStack gap={4} mt={{ base: 2, md: 0 }}>
            <Link
              href="#"
              color="white"
              _hover={{ textDecoration: "underline" }}
            >
              Política de Privacidade
            </Link>
            <Link
              href="#"
              color="white"
              _hover={{ textDecoration: "underline" }}
            >
              Termos de Uso
            </Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
