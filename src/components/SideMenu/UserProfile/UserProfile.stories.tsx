import React from "react";
import { MemoryRouter } from "react-router-dom";
import { UserProfile } from ".";
import { useUserStore } from "@/store/useUserStore";
import { mockLoggedInUser } from "@/data/mockLoggedInUser";
import type { Decorator } from "@storybook/react";

const StoreDecorator: Decorator = (Story) => {
  useUserStore.setState({ user: mockLoggedInUser });
  return <Story />;
};

export default {
  title: "SideMenu/UserProfile",
  component: UserProfile,
  decorators: [StoreDecorator],
};

export const Default = () => (
  <MemoryRouter>
    <UserProfile />
  </MemoryRouter>
);
