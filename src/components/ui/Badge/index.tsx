import { getBadgeProps } from "@/utils/helpers";
import { rem } from "@/utils/rem";
import { BadgeStatus, Enum } from "@/utils/types";
import { Flex } from "@chakra-ui/react";

interface Props {
  label: string;
  status: Enum<typeof BadgeStatus>;
}

export const Badge = ({ label, status }: Props) => {
  const { bg, color, border } = getBadgeProps(status);

  return (
    <Flex
      justify="center"
      align="center"
      borderRadius={rem(4)}
      minW={rem(80)}
      w="fit-content"
      h={rem(30)}
      fontWeight={500}
      fontSize={rem(14)}
      bg={bg}
      color={color}
      border={border}
    >
      {label}
    </Flex>
  );
};
