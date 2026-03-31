import { auth } from "@/src/lib/auth";
import { SignInInput, SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from "./AuthRepository";
import { headers } from "next/headers";
import { APIError } from "better-auth";

class AuthService {

    constructor(
        private authRepository : IAuthRepository
    ){}

    async register(credentials : SignUpInput){
        const { name, email, password } = credentials

        // Revisar si el usuario existe
        const user = await this.authRepository.userExists(email)
        if (user) {
            return {
                error: 'Este e-mail ya esta registrado',
                success: ''
            }
        }

        // Validaciones de negocio

        
        // Manejar el registro
        await auth.api.signUpEmail({
            body: {
                name,
                email,
                password
            }
        })

        return {
            error: '',
            success: 'Cuenta Creada Correctamente, revisa tu e-mail'
        }
    }

    async login(credentials: SignInInput) {
        const { email, password } = credentials
        const user = await this.authRepository.userExists(email)
        if (!user) {
            return {
                error: 'El Usuario no existe',
                success: ''
            }
        }

        //Verificar su password y si confirmo su cuenta
        try {
            await auth.api.signInEmail({
                body: {
                    email,
                    password,
                    callbackURL: '/dashboard'
                },
                headers: await headers()
            })
            return {
                error: '',
                success: 'Sesión Iniciada Correctamente'
            }

        } catch (error) {
            if (error instanceof APIError) {
                const messages : Record<number, string> = {
                    401: 'Password Incorrecto',
                    403: 'Tu cuenta no ha sido confirmada, hemos enviado un e-mail'
                }

                const errorMessage = messages[error.statusCode]
                if (errorMessage) {
                    return {
                        error: errorMessage,
                        success: ''
                    }
                }
            }
        }
        return {
                error: '',
                success: ''
            }
    }
}


export const authService = new AuthService(authRepository);