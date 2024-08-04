import DatePicker from "@/components/DatePicker";
import ListItem from "@/components/mini/ListItem";
import UserAvatar from "@/components/mini/UserAvatar";
import MainLayout from "@/layouts/MainLayout";
import {
  Box,
  Grid,
  GridItem,
  HStack,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <>
      <MainLayout>
        <Stack spacing={6} py={6}>
          <Grid
            templateRows={{ lg: "repeat(2, 1fr)" }}
            templateColumns={{ lg: "repeat(3, 1fr)" }}
            gap={2}
            rounded={"xl"}
            overflow={"hidden"}
          >
            {[1, 2, 3].map((item, idx) => (
              <GridItem
                key={idx}
                rowSpan={idx < 1 ? 2 : "auto"}
                colSpan={idx < 1 ? 2 : "auto"}
              >
                <Image
                  src="https://a0.muscache.com/im/pictures/ce537598-32d5-4b0d-907c-463e8a18ab87.jpg"
                  alt="Room Image"
                  h={"100%"}
                  w={"100%"}
                  objectFit="cover"
                  fallbackSrc="https://via.placeholder.com/150"
                />
              </GridItem>
            ))}
          </Grid>
          <Grid templateColumns={{ lg: "repeat(12, 1fr)" }} gap={2}>
            <GridItem colSpan={{ lg: 7 }}>
              <Stack
                spacing={6}
                divider={<StackDivider borderColor="gray.200" />}
              >
                <Box>
                  <Text
                    as={"h2"}
                    fontSize={{ lg: "3xl", base: "xl" }}
                    fontWeight={600}
                  >
                    Nono-Wada style Pool villa, forest view &gazebo
                  </Text>
                  <Text as={"h3"} fontSize={{ lg: "xl" }} fontWeight={600}>
                    Entire villa in Velhe, Torna-Rajgad, India
                  </Text>
                  <Text color={"gray.700"}>
                    9 guests3 bedrooms3 beds3.5 bathrooms
                  </Text>
                </Box>
                <UserAvatar />
                <Stack spacing={5}>
                  <ListItem />
                  <ListItem />
                  <ListItem />
                </Stack>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reiciendis odio sed facere fuga magni eaque, minus doloremque
                  optio? Fuga modi cumque assumenda, tempora nihil reiciendis
                  iste soluta nesciunt voluptatibus adipisci.
                </Text>
                <DatePicker />
              </Stack>
            </GridItem>
            <GridItem colSpan={{ lg: 5 }}>2</GridItem>
          </Grid>
        </Stack>
      </MainLayout>
    </>
  );
}

// 1) room title (DONE)
// 2) image gallery (DONE)
// 3) room short info (bed etc, location, review) (DONE)
// 4) host info (short) (DONE)
// 5) key features (DONE)
// 6) description (DONE)
// 7) bedroom highlight
// 8) perks
// 9) booking calendar (DONE)
// 10) reviews
// 11) host complete info
