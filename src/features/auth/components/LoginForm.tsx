"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormLabel, FormInput, FormSubmit, FormError } from "@/src/shared/components/forms"
import { SignInInput, SignInSchema } from "../schemas/authSchema"
import toast from "react-hot-toast"
import { signInAction } from "../actions/auth-actions"

export default function LoginForm() {

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(SignInSchema),
        mode: 'all'
    })

    const onSubmit = async (data : SignInInput) => {
        const {error, success} = await signInAction(data)
        

        if (error) {
            toast.error(error)
        }
        if (success) {
            toast.success(success)
        }
    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
        >

            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput
                id="email"
                type="email"
                placeholder="Ingresa tu E-mail"
                {...register('email')}
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}


            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput
                id="password"
                type="password"
                placeholder="Ingresa tu Password"
                {...register('password')}
            />
            {errors.password && <FormError>{errors.password.message}</FormError>}

            <FormSubmit value={"Iniciar Sesión"} />
        </Form>
    )
}
