import { Flex, Skeleton } from "@chakra-ui/react";
import { rem } from "@/utils/rem";

import { Item } from "./Item";
import { Separator } from "./Separator";
import { DashboardErrorState } from "./ErrorState";
import { useCustomersDashboard } from "@/hooks/useCustomersDashboard";
import React from "react";

export const CustomersDashboard = () => {
  const { error, items, loading } = useCustomersDashboard();

  if (loading) {
    return <Skeleton minH={rem(150)} borderRadius={rem(30)} />;
  }

  if (error) {
    return <DashboardErrorState error={error} />;
  }

  return (
    <Flex
      minH={rem(150)}
      bg="white"
      borderRadius={rem(30)}
      px={rem(50)}
      py={rem(30)}
      justify="space-between"
      align="center"
      boxShadow={`0 0 ${rem(10)} 0 #E2ECF9`}
      gap={rem(24)}
      flexWrap="wrap"
    >
      {items.map((item, idx) => (
        <React.Fragment key={item.header}>
          <Item {...item} />
          {idx < items.length - 1 && <Separator />}
        </React.Fragment>
      ))}
    </Flex>
  );
};
