import { z } from "zod";

export const FormSchema = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().regex(/^\+?[1-9]\d{1,14}$/, {
    message: "Invalid phone number format",
  }),
});

export type FromType = z.infer<typeof FormSchema>;

export const formOptions = [
  {
    label:"Name",
    name:"name",
    placeholder:"e.g. Stephen King"
  },
  {
    label:"Email",
    name:"email",
    placeholder:"e.g. stephenking@lorem.com"
  },
  {
    label:"Phone Number",
    name:"phone",
    placeholder:"e.g. +1 234 567 890"
  }
] as const