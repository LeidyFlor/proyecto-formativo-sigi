import { z } from "zod";

export const loginShema = z.object({
  
  userEmail: z.email("Debe ingresar un email valido"),

  userPassword: z.string().min(1, "La constraseña es obligatoria"),
});