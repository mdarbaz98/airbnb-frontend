// 1) room Card
// - image box
// - title
// - hosted by
// - price

import { Grid, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function RoomCard({}: Props) {
  return (
    <Stack>
      <Grid>
        <Image
          src="https://a0.muscache.com/im/pictures/ce537598-32d5-4b0d-907c-463e8a18ab87.jpg"
          alt="Room Image"
          rounded="2xl"
          overflow="hidden"
          aspectRatio={"1/1"}
          objectFit="cover"
        />
      </Grid>
      <Stack spacing={0}>
        <Text fontWeight={600}>Beautiful Room</Text>
        <Text color={"gray"}>Hosted by John Doe</Text>
      </Stack>
      <Text fontWeight={600}>
        $150
        <Text ms={1} as={"span"} fontWeight={400}>
          night
        </Text>
      </Text>
    </Stack>
  );
}

// https://www.youtube.com/watch?v=GJPEgai_dKw
