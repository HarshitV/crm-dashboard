import { rem } from "@/utils/rem";
import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface Props {
  header: string;
  icon: React.ReactNode;
  value: number;
  avatars?: { src: string; name: string }[];
  change?: number;
}

export const Item = ({ avatars, change, header, icon, value }: Props) => (
  <Flex align="center" gap={rem(20)}>
    <Flex
      boxSize={{ base: rem(50), xl: rem(84) }}
      bg="status-active-bg"
      borderRadius="full"
      align="center"
      justify="center"
    >
      {icon}
    </Flex>
    <Flex direction="column" gap={rem(2)}>
      <Text color="dashboard-label" fontSize={{ base: rem(12), xl: rem(14) }}>
        {header}
      </Text>
      <Text
        color="dashboard-value"
        fontSize={{ base: rem(20), xl: rem(32) }}
        fontWeight="semibold"
        lineHeight={1}
      >
        {value.toString()}
      </Text>
      {change && (
        <Flex align="center" wrap="wrap" gap={rem(4)}>
          <Text
            color={change >= 0 ? "success-main" : "error-main"}
            fontWeight={700}
            fontSize={rem(12)}
          >
            {change >= 0 ? "↑" : "↓"} {Math.abs(change)}%
          </Text>
          <Text color="dashboard-muted" fontSize={rem(12)}>
            this month
          </Text>
        </Flex>
      )}
      {avatars && (
        <Flex>
          {avatars.slice(0, 5).map((avatar, i) => (
            <Box
              key={i}
              boxSize={{ base: rem(20), xl: rem(26) }}
              borderRadius="50%"
              border={`${rem(1.3)} solid var(--chakra-colors-avatar-border)`}
              ml={i === 0 ? 0 : rem(-8)}
              overflow="hidden"
            >
              <Image
                src={avatar.src}
                alt={avatar.name}
                boxSize="100%"
                objectFit="cover"
              />
            </Box>
          ))}
        </Flex>
      )}
    </Flex>
  </Flex>
);
