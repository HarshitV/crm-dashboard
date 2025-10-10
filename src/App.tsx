import { Flex } from "@chakra-ui/react";
import { SideMenu } from "./components/SideMenu";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, useCallback, useEffect } from "react";
import { useUserStore } from "./store/useUserStore";
import { mockLoggedInUser } from "./data/mockLoggedInUser";
import { MOCK_TIMEOUT_DELAY } from "./utils/constants";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Customers = lazy(() => import("./pages/Customers"));
const Income = lazy(() => import("./pages/Income"));
const Promote = lazy(() => import("./pages/Promote"));
const Help = lazy(() => import("./pages/Help"));

export const App = () => {
  const setUser = useUserStore((state) => state.setUser);

  const fetchUser = useCallback(() => {
    setTimeout(() => {
      setUser(mockLoggedInUser);
    }, MOCK_TIMEOUT_DELAY);
  }, [setUser]);

  useEffect(() => fetchUser(), [fetchUser]);

  return (
    <BrowserRouter>
      <Flex boxSize="100%">
        <SideMenu />
        <Flex direction="column" flex="1">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/product" element={<Product />} />
            <Route path="/customers" element={<Customers />} />
            <Route path="/income" element={<Income />} />
            <Route path="/promote" element={<Promote />} />
            <Route path="/help" element={<Help />} />
            <Route path="/" element={<Dashboard />} />
          </Routes>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};
