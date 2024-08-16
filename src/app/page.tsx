import Banner from "@/components/Banner";
import FeatureCategoryCard from "@/components/FeatureCategoryCard";
import RoomCard from "@/components/RoomCard";
import MainLayout from "@/layouts/MainLayout";
import {
  Box,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  WrapItem,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout>
      <Stack spacing={12}>
        <Banner />
        <Stack spacing={6}>
          <Box>
            <Heading>Enjoy your dream vacation</Heading>
            <Text maxW={"lg"}>
              Plan and book our perfect trip with expert advice, travel tips,
              destination information and inspiration from us
            </Text>
          </Box>
          <SimpleGrid gap={6} columns={{ md: 2, lg: 4 }}>
            <FeatureCategoryCard />
            <FeatureCategoryCard />
            <FeatureCategoryCard />
            <FeatureCategoryCard />
          </SimpleGrid>
        </Stack>
        <Stack spacing={6}>
          <Heading>Popular hotels</Heading>
          <SimpleGrid gap={6} columns={{ md: 2, lg: 4 }}>
            <RoomCard />
            <RoomCard />
            <RoomCard />
            <RoomCard />
          </SimpleGrid>
        </Stack>
      </Stack>
    </MainLayout>
  );
}

// Todo tasks
// 1) room Card
// - image box
// - title
// - hosted by
// - price
// 2) Search bar
// 3) header
// 4) footer
// 5) room details page
// 6) login module
// 7) statics pages
