"use client";
import { HStack, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";

type Props = {};

export default function ListItem({}: Props) {
  return (
    <HStack gap={4}>
      <Icon as={FaLocationDot} boxSize={6} />
      <Stack spacing={0}>
        <Text textTransform={"capitalize"} fontWeight={500}>
          Great location
        </Text>
        <Text fontSize={"sm"} color={"gray.600"}>
          90% of recent guests gave the location a 5-star rating.
        </Text>
      </Stack>
    </HStack>
  );
}
