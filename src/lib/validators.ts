import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js/min";
import { z } from "zod";

function phone(schema: z.ZodString, message?: string) {
  return schema
    .refine(isValidPhoneNumber, message)
    .transform((value) => parsePhoneNumber(value)?.number.toString());
}

export { phone };
