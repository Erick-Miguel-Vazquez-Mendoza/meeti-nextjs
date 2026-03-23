"use client"

import { Form, FormLabel, FormInput, FormSubmit } from "@/src/shared/components/forms"

export default function RegisterForm() {
    return (
        <Form
            action=""
            className=""
        >
            <FormLabel htmlFor="name">Nombre</FormLabel>
            <FormInput 
                id="name"
                type="text"
                placeholder="Ingresa tu Nombre"
            />

            <FormLabel htmlFor="email">E-mail</FormLabel>
            <FormInput 
                id="email"
                type="email"
                placeholder="Ingresa tu E-mail"
            />

            <FormLabel htmlFor="password">Password</FormLabel>
            <FormInput 
                id="password"
                type="password"
                placeholder="Ingresa tu Password - min 8 Caraceres"
            />

            <FormLabel htmlFor="password_confirmation">Repetir Password</FormLabel>
            <FormInput 
                id="password_confirmation"
                type="password"
                placeholder="Repite tu Password"
            />

            <FormSubmit value={"Registrarme"}/>
        </Form>
    )
}
