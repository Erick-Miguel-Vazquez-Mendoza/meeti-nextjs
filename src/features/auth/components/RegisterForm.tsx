"use client"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormLabel, FormInput, FormSubmit, FormError } from "@/src/shared/components/forms"
import { SignUpSchema } from "../schemas/authSchema"

export default function RegisterForm() {

    const { register, handleSubmit, watch, formState : {errors} } = useForm({
        resolver: zodResolver(SignUpSchema)
    })
    console.log(errors);
    
    const onSubmit = () => {

    }

    return (
        <Form
            onSubmit={handleSubmit(onSubmit)}
        >
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormInput 
                id="name"
                type="text"
                placeholder="Ingresa tu Nombre"
                {...register('name')}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}

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
                placeholder="Ingresa tu Password - min 8 Caraceres"
                {...register('password')}
            />
            {errors.password && <FormError>{errors.password.message}</FormError>}

            <FormLabel htmlFor="password_confirmation">Repetir Password</FormLabel>
            <FormInput 
                id="password_confirmation"
                type="password"
                placeholder="Repite tu Password"
                {...register('passwordConfirmation')}
            />
            {errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError>}

            <FormSubmit value={"Registrarme"}/>
        </Form>
    )
}
