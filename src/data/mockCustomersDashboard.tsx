import { ActiveNow } from "@/icons/ActiveNow";
import { AllCustomers } from "@/icons/AllCustomers";
import { Members } from "@/icons/Members";
import { rem } from "@/utils/rem";
import Profile from "@/images/Profile.png";

const avatars = [
  { src: Profile, name: "User 1" },
  { src: Profile, name: "User 2" },
  { src: Profile, name: "User 3" },
  { src: Profile, name: "User 4" },
  { src: Profile, name: "User 5" },
];

export const mockCustomersDashboardMock = [
  {
    header: "Total Customers",
    icon: <AllCustomers boxSize={{ base: rem(30), xl: rem(42) }} />,
    value: 100,
    change: 16,
  },
  {
    header: "Members",
    icon: <Members boxSize={{ base: rem(28), xl: rem(40) }} />,
    value: 59,
    change: -1,
  },
  {
    header: "Active Now",
    icon: <ActiveNow boxSize={{ base: rem(30), xl: rem(42) }} />,
    value: 44,
    avatars,
  },
];
