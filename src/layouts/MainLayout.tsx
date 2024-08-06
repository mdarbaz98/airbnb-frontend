"use client";
import BookingModal from "@/components/BookingModal";
import Footer from "@/components/includes/Footer";
import Header from "@/components/includes/Header";
import theme from "@/styles/theme";
import { ChakraProvider, Container } from "@chakra-ui/react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <Header />
        <Container maxW={"container.xl"} p={2}>
          {children}
        </Container>
        <Footer />
        <BookingModal />
      </ChakraProvider>
    </>
  );
}
