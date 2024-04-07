"use server";

import * as z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import { RegisterSchema } from "@/schemas";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // console.log(values);
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    //console.error(validatedFields.error);
    return { error: "Invalid Fields" };
  }

  return { success: "Email Sent!!" };
};
