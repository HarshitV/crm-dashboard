import { sideMenuItems } from "@/utils/constants";
import { rem } from "@/utils/rem";
import { Box, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

export const MenuItems = React.memo(() => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex direction="column" gap={rem(6)} px={rem(12)} mb="25%">
      {sideMenuItems.map((item) => {
        const isActive = [item.link, item.subLink].includes(location.pathname);
        const { icon: Icon, hasSubMenu, link, name } = item;

        return (
          <Flex key={name}>
            <Button
              onClick={() => navigate(link)}
              w="100%"
              justifyContent="flex-start"
              fontWeight={500}
              fontSize={rem(14)}
              variant={isActive ? "solid" : "ghost"}
              color={isActive ? "button-primary-text" : "text-secondary"}
              bg={isActive ? "brand-primary" : "transparent"}
              _hover={
                !isActive
                  ? {
                      bg: "rgba(89, 50, 234, 0.5)",
                      color: "white",
                    }
                  : undefined
              }
              py={rem(11)}
              px={rem(10)}
            >
              <Flex w="100%" gap={rem(14)} align="center">
                <Icon fill={isActive ? "#fff" : "#9197B3"} />
                {name}
                {hasSubMenu && (
                  <Box as="span" ml="auto">
                    <BiChevronRight />
                  </Box>
                )}
              </Flex>
            </Button>
          </Flex>
        );
      })}
    </Flex>
  );
});

MenuItems.displayName = "MenuItems";
