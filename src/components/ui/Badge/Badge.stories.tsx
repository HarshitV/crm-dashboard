import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from ".";

const meta: Meta<typeof Badge> = {
  title: "ui/Badge",
  component: Badge,
  decorators: [(Story: React.FC) => <Story />],
  argTypes: {
    label: { control: "text", defaultValue: "Active" },
    status: {
      control: "select",
      options: ["active", "inactive"],
      defaultValue: "active",
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: "Active",
    status: "active",
  },
};
