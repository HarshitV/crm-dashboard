import React from "react";
import { MemoryRouter } from "react-router-dom";
import { SideMenu } from "./index";

export default {
  title: "SideMenu",
  component: SideMenu,
};

export const Default = () => (
  <MemoryRouter>
    <SideMenu />
  </MemoryRouter>
);
