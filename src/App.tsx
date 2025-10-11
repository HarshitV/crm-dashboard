import { Suspense } from "react";
import { Flex } from "@chakra-ui/react";
import { Toast } from "./components/ui/Toast";
import { SideMenu } from "./components/SideMenu";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { useFetchUser } from "./hooks/useFetchUser";

import { PageLoader } from "./components/ui/PageLoader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Product = lazy(() => import("./pages/Product"));
const Customers = lazy(() => import("./pages/Customers"));
const Income = lazy(() => import("./pages/Income"));
const Promote = lazy(() => import("./pages/Promote"));
const Help = lazy(() => import("./pages/Help"));

export const App = () => {
  const { error, setError } = useFetchUser();

  return (
    <BrowserRouter>
      {error && (
        <Toast
          message={error}
          onClose={() => setError(null)}
          duration={3000}
          variant="error"
        />
      )}
      <Flex boxSize="100%">
        <SideMenu />
        <Flex direction="column" flex="1">
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/product" element={<Product />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/income" element={<Income />} />
              <Route path="/promote" element={<Promote />} />
              <Route path="/help" element={<Help />} />
              <Route path="/" element={<Dashboard />} />
            </Routes>
          </Suspense>
        </Flex>
      </Flex>
    </BrowserRouter>
  );
};
