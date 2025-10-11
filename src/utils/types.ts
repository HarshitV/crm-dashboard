export type Customer = {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: "active" | "inactive";
};

export const BadgeStatus = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

export type Enum<T> = T[keyof T];
