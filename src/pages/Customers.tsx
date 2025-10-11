import { PageWrapper } from "@/components/ui/PageWrapper";
import { CustomersDashboard } from "@/components/Customers/Dashboard";

import { CustomersList } from "../components/Customers/CustomersList";
import { Topnav } from "@/components/ui/Topnav";

const Customers = () => (
  <PageWrapper>
    <Topnav />
    <CustomersDashboard />
    <CustomersList />
  </PageWrapper>
);

export default Customers;
