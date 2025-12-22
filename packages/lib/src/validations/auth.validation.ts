import { z } from "zod";

import { emailRegex } from "./../regexes";

export const loginSchema = z.object({
  email: z
    .string({ error: "ایمیل اجباری است" })
    .min(1, "ایمیل اجباری است")
    .regex(emailRegex, "ایمیل نامعتبر است"),
  password: z
    .string({ error: "رمز عبور اجباری است" })
    .min(6, "رمز عبور باید حداقل ۶ کاراکتر باشد"),
  tenant: z
    .string({ error: "شناسه پنل اجباری است" })
    .min(1, "شناسه پنل اجباری است"),
});

export type LoginSchemaT = z.infer<typeof loginSchema>;


