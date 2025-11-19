import { z } from "zod";

export const signupSchema = z.object({
    username: z.string().min(3, "El usuario es obligatorio"),
    email: z.string().email("Correo inválido"),
    password: z
        .string()
        .min(4, "Mínimo 4 caracteres")
        //.regex(/[A-Za-z]/, "Debe contener al menos una letra")
        .regex(/\d/, "Debe contener al menos un número"),
    //.regex(/[^A-Za-z0-9]/, "Debe contener un caracter especial"),
    confirmPassword: z.string(),
}).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
    }
);

export const loginSchema = z.object({
    username: z.string().min(3, "El usuario es obligatorio"),
    password: z
        .string()
        .min(4, "Mínimo 4 caracteres")
        //.regex(/[A-Za-z]/, "Debe contener al menos una letra")
        .regex(/\d/, "Debe contener al menos un número"),
    //.regex(/[^A-Za-z0-9]/, "Debe contener un caracter especial"),
    confirmPassword: z.string(),
}).refine(
    (data) => data.password === data.confirmPassword,
    {
        message: "Las contraseñas no coinciden",
        path: ["confirmPassword"],
    }
);;
