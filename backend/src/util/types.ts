import { PrismaClient } from "@prisma/client";
import { ISODateString } from "next-auth";

export interface GraphQlContext {
    session: Session | null
    prisma: PrismaClient
}

export interface Session {
    user: User
    expires: ISODateString
}

export interface User {
    id: string;
    username: string;
    email: string;
    emailVerified: boolean;
    image: string;
    name: string;
}

/**
 * User types
 */

export interface CreateUsernameResponse {
    success?: boolean
    error?: string
}