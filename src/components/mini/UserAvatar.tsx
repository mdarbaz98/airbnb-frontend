import { Avatar, HStack, Stack, Text, WrapItem } from "@chakra-ui/react";

type Props = {};

export default function UserAvatar({}: Props) {
  return (
    <HStack gap={4}>
      <WrapItem>
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      </WrapItem>
      <Stack spacing={0}>
        <Text textTransform={"capitalize"} fontWeight={500}>
          hosted by arbaaz
        </Text>
        <Text fontSize={"sm"} color={"gray.600"}>
          5 years hosting
        </Text>
      </Stack>
    </HStack>
  );
}
