import React, { useEffect } from "react";
import { Flex } from "@chakra-ui/react";
import { rem } from "@/utils/rem";

interface Props {
  message: string;
  onClose: () => void;
  duration?: number;
  variant?: "default" | "error";
}

export const Toast = ({
  message,
  onClose,
  duration = 3000,
  variant = "default",
}: Props) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <Flex
      position="fixed"
      bottom={rem(24)}
      left="50%"
      transform="translateX(-50%)"
      bg={variant === "error" ? "red.500" : "gray.800"}
      color={variant === "error" ? "white" : "white"}
      p={rem(16)}
      borderRadius="md"
      zIndex={9999}
      align="center"
      minW={rem(200)}
      justify="center"
    >
      {message}
    </Flex>
  );
};
