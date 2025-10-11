import { mockLoggedInUser } from "@/data/mockLoggedInUser";
import { Topnav } from ".";
import { useUserStore } from "@/store/useUserStore";
import type { Decorator } from "@storybook/react";

const StoreDecorator: Decorator = (Story) => {
  useUserStore.setState({ user: mockLoggedInUser });
  return <Story />;
};

export default {
  title: "ui/Topnav",
  component: Topnav,
  decorators: [StoreDecorator],
};

export const Default = () => <Topnav />;
