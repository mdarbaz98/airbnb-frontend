import DatePicker from "@/components/DatePicker";
import UserAvatar from "@/components/mini/UserAvatar";
import MainLayout from "@/layouts/MainLayout";
import {
  Box,
  Button,
  Card,
  CardBody,
  Grid,
  GridItem,
  HStack,
  Image,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaWifi } from "react-icons/fa6";

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
            <GridItem colSpan={{ lg: 8 }}>
              {/* <Stack
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
              </Stack> */}
              <Stack spacing={6}>
                <HStack gap={6}>
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
                  <Box>
                    <Button w={"fit-content"} colorScheme="blue">
                      Check availability
                    </Button>
                  </Box>
                </HStack>
                <Card>
                  <CardBody
                    as={Stack}
                    divider={<StackDivider borderColor="gray.200" />}
                    spacing={6}
                    p={{ base: 3, lg: 6 }}
                  >
                    <Text>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Quo dolores totam aspernatur, voluptatem ea suscipit rem
                      maiores, voluptas impedit dolorem doloribus voluptates
                      quia, numquam modi deserunt nostrum possimus labore!
                      Molestiae. Lorem ipsum dolor sit, amet consectetur
                      adipisicing elit. Quo dolores totam aspernatur, voluptatem
                      ea suscipit rem maiores, voluptas impedit dolorem
                      doloribus voluptates quia, numquam modi deserunt nostrum
                      possimus labore! Molestiae.
                    </Text>
                    <SimpleGrid columns={[2, 3]} gap={6}>
                      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, idx) => (
                        <GridItem as={HStack} key={idx}>
                          <FaWifi />
                          <Text>Wifi Available</Text>
                        </GridItem>
                      ))}
                    </SimpleGrid>
                  </CardBody>
                </Card>
              </Stack>
            </GridItem>
            <GridItem colSpan={{ lg: 4 }}>2</GridItem>
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
