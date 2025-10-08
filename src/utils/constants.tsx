import { Customers } from "@/icons/Customers";
import { Dashboard } from "@/icons/Dashboard";
import { Help } from "@/icons/Help";
import { Income } from "@/icons/Income";
import { Product } from "@/icons/Product";
import { Promote } from "@/icons/Promote";

export const sideMenuItems = [
  {
    name: "Dashboard",
    link: "/dashboard",
    subLink: "/",
    icon: Dashboard,
    hasSubMenu: false,
  },
  {
    name: "Product",
    link: "/product",
    icon: Product,
    hasSubMenu: true,
  },
  {
    name: "Customers",
    link: "/customers",
    icon: Customers,
    hasSubMenu: true,
  },
  {
    name: "Income",
    link: "/income",
    icon: Income,
    hasSubMenu: true,
  },
  {
    name: "Promote",
    link: "/promote",
    icon: Promote,
    hasSubMenu: true,
  },
  {
    name: "Help",
    link: "/help",
    icon: Help,
    hasSubMenu: true,
  },
];

export const PAGE_SIZE = 8;
