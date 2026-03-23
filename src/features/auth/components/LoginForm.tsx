"use client"

import { Form, FormLabel, FormInput, FormSubmit } from "@/src/shared/components/forms"

export default function LoginForm() {
    return (
        <Form
            action=""
            className=""
        >
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
                placeholder="Ingresa tu Password"
            />
            <FormSubmit value={"Iniciar Sesión"}/>
        </Form>
    )
}
