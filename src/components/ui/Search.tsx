import { rem } from "@/utils/rem";
import { Flex, FlexProps, Input } from "@chakra-ui/react";
import { FiSearch } from "react-icons/fi";

interface Props extends FlexProps {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const Search = ({ onChange, value, ...rest }: Props) => (
  <Flex
    align="center"
    bg="#F9FBFF"
    borderRadius={rem(10)}
    p={rem(7)}
    w={{ base: rem(150), xl: rem(215) }}
    h={rem(38)}
    _focusWithin={{ boxShadow: "0 0 0 1px #2684FF" }}
    {...rest}
  >
    <FiSearch color="#7E7E7E" size={rem(16)} />
    <Input
      id="customer-search"
      placeholder="Search"
      value={value}
      onChange={onChange}
      border="none"
      _focusVisible={{ border: "none", outlineWidth: "inherit" }}
      _placeholder={{ color: "#B5B7C0" }}
    />
  </Flex>
);
