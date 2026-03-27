import z from "zod";

export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1, {error: 'El nombre es obligatorio'}),
    email: z.email({error: 'El email no es valido'}),
    password: z.string().trim().min(8, {error: 'El password debe tener mínimo 8 caracteres'}),
    passwordConfirmation: z.string().trim().min(1, {error: 'El password de confirmacion no puede ir vacío'})
})

export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true
}).refine((data) => data.password === data.passwordConfirmation, {
    error: 'Los Passwords no son iguales',
    path: ['passwordConfirmation']
})

export type SignUpInput = z.infer<typeof SignUpSchema>