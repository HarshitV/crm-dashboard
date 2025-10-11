import { mockCustomersDashboardMock } from "@/data/mockCustomersDashboard";
import { MOCK_TIMEOUT_DELAY } from "@/utils/constants";
import { useEffect, useState } from "react";

export const useCustomersDashboard = () => {
  const [items, setItems] = useState<typeof mockCustomersDashboardMock>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setError("");
    const fetchData = async () => {
      try {
        await new Promise<typeof mockCustomersDashboardMock>((resolve) => {
          setTimeout(() => {
            resolve(mockCustomersDashboardMock);
          }, MOCK_TIMEOUT_DELAY);
        }).then((data) => setItems(data));
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
