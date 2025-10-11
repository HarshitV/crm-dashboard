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
    bg={active ? "brand-primary" : "button-secondary-bg"}
    color={active ? "button-primary-text" : "button-secondary-text"}
    fontSize={rem(12)}
    fontWeight="500"
    {...props}
  />
);
