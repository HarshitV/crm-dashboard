import { useUserStore } from "@/store/useUserStore";
import { rem } from "@/utils/rem";
import { Flex, Image, Text } from "@chakra-ui/react";
import { Loader } from "./Loader";

export const UserProfile = () => {
  const user = useUserStore((state) => state.user);

  if (!user) return <Loader />;

  return (
    <Flex position="fixed" bottom="10%" gap={rem(8)}>
      <Image
        src={user.image}
        alt="User img"
        borderRadius="50%"
        boxSize={rem(42)}
      />
      <Flex direction="column">
        <Text fontSize={rem(14)}>{user.name}</Text>
        <Text fontSize={rem(12)} color="#757575">
          {user.title}
        </Text>
      </Flex>
    </Flex>
  );
};
