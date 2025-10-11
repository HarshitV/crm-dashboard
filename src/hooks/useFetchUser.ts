import { mockLoggedInUser } from "@/data/mockLoggedInUser";
import { useUserStore } from "@/store/useUserStore";
import { MOCK_TIMEOUT_DELAY } from "@/utils/constants";
import { useCallback, useEffect, useState } from "react";

export const useFetchUser = () => {
  const setUser = useUserStore((state) => state.setUser);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = useCallback(async () => {
    try {
      await new Promise((resolve) => setTimeout(resolve, MOCK_TIMEOUT_DELAY));
      setUser(mockLoggedInUser);
    } catch (err) {
      setError("Error fetching user");
      console.error("Error fetching user:", err);
      setTimeout(() => setError(null), 5000);
    }
  }, [setUser]);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return { error, setError };
};
