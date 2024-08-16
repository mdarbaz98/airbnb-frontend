import { Container, GridItem, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <Container maxW={"container.xl"} py={4}>
      <SimpleGrid columns={{ md: 2, lg: 5 }}>
        {[1, 2, 3, 4, 5].map((item, i) => (
          <GridItem key={i}>
            <Text>Company</Text>
            <Stack>
              <Text>item 1</Text>
              <Text>item 1</Text>
              <Text>item 1</Text>
              <Text>item 1</Text>
            </Stack>
          </GridItem>
        ))}
      </SimpleGrid>
    </Container>
  );
}
