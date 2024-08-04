import RoomCard from "@/components/RoomCard";
import MainLayout from "@/layouts/MainLayout";
import { SimpleGrid } from "@chakra-ui/react";

export default function Home() {
  return (
    <MainLayout>
      <SimpleGrid gap={6} columns={{md: 2, lg: 4}}>
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
        <RoomCard />
      </SimpleGrid>
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
