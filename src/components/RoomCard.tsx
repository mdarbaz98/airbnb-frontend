// 1) room Card
// - image box
// - title
// - hosted by
// - price

import { Card, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function RoomCard({}: Props) {
  return (
    <Stack maxW={"md"}>
      <Image
        src="https://a0.muscache.com/im/pictures/ce537598-32d5-4b0d-907c-463e8a18ab87.jpg?im_w=720"
        alt="Room Image"
        rounded="md"
        overflow="hidden"
        objectFit="cover"
      />
      <Stack spacing={0}>
        <Text>Beautiful Room</Text>
        <p>Hosted by John Doe</p>
      </Stack>
      <Text>$150 per night</Text>
    </Stack>
  );
}
