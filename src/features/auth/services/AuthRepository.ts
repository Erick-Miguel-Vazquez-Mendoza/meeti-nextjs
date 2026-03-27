import { db } from "@/src/db";
import { users } from "@/src/db/schema";
import { eq } from "drizzle-orm";
import { User } from "../types/auth.types";

export interface IAuthRepository {
    userExists(email: string) : Promise<User | undefined>
}

class AuthRepository implements IAuthRepository {
    async userExists(email: string) {
        return await db.query.users.findFirst({
            where: eq(users.email, email),
        })
    }
}

export const authRepository = new AuthRepository();