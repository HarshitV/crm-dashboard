import { mockCustomersDashboardMock } from "@/data/mockCustomersDashboard";
import { MOCK_TIMEOUT_DELAY } from "@/utils/constants";
import { useEffect, useState } from "react";

// Custom hook to fetch customers dashboard data
export const useCustomersDashboard = () => {
  const [items, setItems] = useState<typeof mockCustomersDashboardMock>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, MOCK_TIMEOUT_DELAY));
        setItems(mockCustomersDashboardMock);
      } catch (err) {
        setError("Failed to load dashboard data.");
        console.error("Error in fetching dashboard data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { error, items, loading };
};
