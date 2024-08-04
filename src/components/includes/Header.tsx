import { Box, Container, Flex, Spacer } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

type Props = {};

export default function Header({}: Props) {
  return (
    <Box borderBottom={1} borderStyle={"solid"} borderColor={"gray.200"}>
      <Container maxW={"container.xl"} p={2}>
        <Flex alignItems={"center"}>
          <Box>
            <Link href={"/"}>Logo</Link>
          </Box>
          <Spacer />
          <Box w="170px" h="10" />
          <Spacer />
          <Box w="180px" h="10" />
        </Flex>
      </Container>
    </Box>
  );
}
