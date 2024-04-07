"use server";

import * as z from "zod";
import { revalidatePath, revalidateTag } from "next/cache";
import { LoginSchema } from "@/schemas";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // console.log(values);
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    //console.error(validatedFields.error);
    return { error: "Invalid Fields" };
  }

  return { success: "Email Sent!!" };
};
