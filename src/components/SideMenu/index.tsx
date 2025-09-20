import { rem } from "@/utils/rem";
import { Box, Flex, Text } from "@chakra-ui/react";
import { MenuItems } from "./MenuItems";
import { UserProfile } from "./UserProfile";
import { Setting } from "@/icons/Setting";

export const SideMenu = () => {
  return (
    <Box
      w="40%"
      h="100vh"
      bg="white"
      shadow="md"
      px={rem(28)}
      py={rem(36)}
      position="relative"
      top={0}
      left={0}
      color="black"
      minW={rem(210)}
      maxW={rem(306)}
      overflowY="auto"
    >
      <Flex alignItems={"flex-end"} gap={rem(4)} mb={rem(60)}>
        <Flex gap={rem(8)}>
          <Setting />
          <Text fontSize={rem(26)} fontWeight={600}>
            Dashboard
          </Text>
        </Flex>
        <Text position="relative" bottom={rem(5)} fontSize={rem(10)}>
          v.01
        </Text>
      </Flex>
      <MenuItems />
      <UserProfile />
    </Box>
  );
};
