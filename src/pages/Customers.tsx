import { Text, Skeleton } from "@chakra-ui/react";

import { PageWrapper } from "@/components/ui/PageWrapper";
import { CustomersDashboard } from "@/components/Customers/CustomersDashboard";
import { useUserStore } from "@/store/useUserStore";
import { rem } from "@/utils/rem";
import { CustomersList } from "../components/Customers/CustomersList";

const Customers = () => {
  const userName = useUserStore((state) => state.user?.name);
  const firstName = userName?.split(" ")[0];
  const isNameLoading = !userName;
  return (
    <PageWrapper>
      {isNameLoading ? (
        <Skeleton height={rem(36)} width={rem(180)} />
      ) : (
        <Text fontSize={rem(24)}>Hello {firstName} 👋🏼,</Text>
      )}
      <CustomersDashboard />
      <CustomersList />
    </PageWrapper>
  );
};

export default Customers;
