import { sideMenuItems } from "@/utils/constants";
import { rem } from "@/utils/rem";
import { Box, Button, Flex } from "@chakra-ui/react";
import { BiChevronRight } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router-dom";

export const MenuItems = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Flex direction="column" gap={rem(6)} px={rem(12)} mb="10%">
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
              fontSize="16px"
              variant={isActive ? "solid" : "ghost"}
              color={isActive ? "white" : "text-secondary"}
              bg={isActive ? "#5932EA" : "transparent"}
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
                <Icon fill={isActive ? "white" : "#9197B3"} />
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
};
