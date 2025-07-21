import {
  Breadcrumb,
  Button,
  HStack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import logoDesktop from "@/assets/logo-sem-fundo.png";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function Header() {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const logo = logoDesktop;

  return (
    <HStack
      px="10"
      py="4"
      width="full"
      position="fixed"
      zIndex="999"
      justifyContent="space-between"
      bg="#eaebf0"
    >
      <Image
        src={logo}
        width={{ base: "120px", md: "150px" }}
        height={{ base: "30px", md: "40px" }}
      />

      <Breadcrumb.Root hidden={isMobile}>
        <Breadcrumb.List gap="4" fontSize="md" fontWeight="500">
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#home">Home</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator> </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#areas">Áreas de Atuação</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator> </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#about-us">Sobre nós</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator> </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#testimonials">Depoimentos</Breadcrumb.Link>
          </Breadcrumb.Item>
          <Breadcrumb.Separator> </Breadcrumb.Separator>
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#contact">Contato</Breadcrumb.Link>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>

      <HStack>
        <Button
          colorPalette="green"
          size={{ base: "sm", md: "md" }}
          variant="solid"
          asChild
        >
          <a href="https://wa.me/message/Y2BY6LNHEASPG1" target="_blank">
            <MdOutlineWhatsapp /> Falar no Whatsapp
          </a>
        </Button>
      </HStack>
    </HStack>
  );
}
