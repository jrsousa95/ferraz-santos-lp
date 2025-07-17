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
      justifyContent="space-between"
      bg="#eaebf0"
    >
      <Image src={logo} width="150px" height="40px" />

      <Breadcrumb.Root hidden={isMobile}>
        <Breadcrumb.List gap="4" fontSize="md" fontWeight="500">
          <Breadcrumb.Item>
            <Breadcrumb.Link href="#home">Home</Breadcrumb.Link>
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
        <Button colorPalette="green" variant="solid">
          <MdOutlineWhatsapp /> Fale conosco
        </Button>
      </HStack>
    </HStack>
  );
}
