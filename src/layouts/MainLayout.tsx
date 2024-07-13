import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import { ChakraProvider, Container } from "@chakra-ui/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChakraProvider>
        <Header />
        <Container maxW={"container.xl"} p={2}>
          {children}
        </Container>
        <Footer />
      </ChakraProvider>
    </>
  );
}
