import { Button, ButtonProps } from "@chakra-ui/react";
import { rem } from "@/utils/rem";

export type PaginationButtonProps = ButtonProps & {
  active?: boolean;
};

export const PaginationButton = ({
  active,
  ...props
}: PaginationButtonProps) => (
  <Button
    size="2xs"
    p={0}
    borderRadius={rem(4)}
    bg={active ? "#5A32EA" : "#F5F5F5"}
    color={active ? "#fff" : "#404B52"}
    fontSize={rem(12)}
    fontWeight="500"
    {...props}
  />
);
