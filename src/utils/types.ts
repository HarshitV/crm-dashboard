export type Customer = {
  id: number;
  name: string;
  company: string;
  phone: string;
  email: string;
  country: string;
  status: "active" | "inactive";
};
