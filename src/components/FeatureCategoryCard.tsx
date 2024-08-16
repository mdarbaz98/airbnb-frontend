import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function FeatureCategoryCard({}: Props) {
  return (
    <>
      <Stack spacing={4}>
        <Image
          src=""
          alt="category-image"
          maxH={"md"}
          w={"100%"}
          fallbackSrc="https://via.placeholder.com/150"
        />
        <Box>
          <Heading fontSize={"lg"}>Australia</Heading>
          <Text>123 properties</Text>
        </Box>
      </Stack>
    </>
  );
}
