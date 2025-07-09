import { z } from "zod";

export const editDaySchema = z.object({
  date: z.string().date(),
  reason: z.string().min(5),
});
export type EditDaySchema = z.infer<typeof editDaySchema>;