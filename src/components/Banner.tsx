import { Box, Image } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function Banner({}: Props) {
  return (
    <Box>
      <Image
        src="https://d3r8gwkgo0io6y.cloudfront.net/upload/bangkok_city.jpg"
        alt="banner"
        w={"100%"}
        // h={{ base: "10rem", lg: "30rem" }}
        maxH={"lg"}
        objectFit={"cover"}
        objectPosition={"top"}
        rounded={"lg"}
        fallbackSrc="https://via.placeholder.com/150"
        filter="auto"
        brightness="60%"
      />
    </Box>
  );
}
