import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  List,
  ListItem,
  SimpleGrid,
  Spacer,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <Box borderBottom={1} borderStyle={"solid"} borderColor={"gray.200"}>
      <Container maxW={"container.xl"} p={2}>
        <Flex
          minH={{ base: "50px" }}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Box flex={1}>
            <Link href={"/"}>Logo</Link>
          </Box>
          <HStack flex={1} justifyContent={"center"} spacing={2}>
            <Link href={""}>Home</Link>
            <Link href={""}>Home</Link>
            <Link href={""}>Home</Link>
          </HStack>
          <Flex flex={1} gap={2} justifyContent={"end"}>
            <Button variant={"outline"} colorScheme="blue">
              Login
            </Button>
            <Button colorScheme="blue">Register</Button>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
