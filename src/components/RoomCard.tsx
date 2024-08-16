// 1) room Card
// - image box
// - title
// - hosted by
// - price

import {
  Button,
  Card,
  CardBody,
  Grid,
  HStack,
  Image,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { FaStar } from "react-icons/fa6";

type Props = {};

export default function RoomCard({}: Props) {
  return (
    // <Stack>
    //   <Grid>
    //     <Image
    //       src="https://a0.muscache.com/im/pictures/ce537598-32d5-4b0d-907c-463e8a18ab87.jpg"
    //       alt="Room Image"
    //       rounded="2xl"
    //       overflow="hidden"
    //       aspectRatio={"1/1"}
    //       objectFit="cover"
    //     />
    //   </Grid>
    //   <Stack spacing={0}>
    //     <Text fontWeight={600}>Beautiful Room</Text>
    //     <Text color={"gray"}>Hosted by John Doe</Text>
    //   </Stack>
    //   <Text fontWeight={600}>
    //     $150
    //     <Text ms={1} as={"span"} fontWeight={400}>
    //       night
    //     </Text>
    //   </Text>
    // </Stack>
    <Stack as={Card} overflow={"hidden"}>
      <Image
        // src="https://a0.muscache.com/im/pictures/ce537598-32d5-4b0d-907c-463e8a18ab87.jpg"
        alt="Room Image"
        maxH={"200px"}
        aspectRatio={"1/1"}
        objectFit="cover"
        fallbackSrc="https://via.placeholder.com/150"
      />
      <CardBody>
        <HStack justifyContent={"space-between"} alignItems={"start"} mb={3}>
          <Stack spacing={0}>
            <Text fontWeight={600}>Beautiful Room</Text>
            <Text color={"gray"}>Hosted by John Doe</Text>
          </Stack>
          <WrapItem alignItems={"center"} gap={1}>
            <Text>{4.5}</Text>
            <FaStar color="yellow" />
          </WrapItem>
        </HStack>
        <HStack justifyContent={"space-between"}>
          <Text fontWeight={600}>
            $150
            <Text ms={1} as={"span"} fontWeight={400}>
              night
            </Text>
          </Text>
          <Button colorScheme="blue">See availability</Button>
        </HStack>
      </CardBody>
    </Stack>
  );
}

// https://www.youtube.com/watch?v=GJPEgai_dKw
