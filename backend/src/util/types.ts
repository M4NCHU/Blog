import { PrismaClient, Prisma } from "@prisma/client";
import { ISODateString } from "next-auth";
import { postPopulated } from "../graphql/resolvers/post";

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


/**
 * Post types
 */

export interface CreatePostArguments { 
    id: string,
    authorId: string
    title: string
    desc: string
    // image: string
}

export interface PostSentSubscriptionPayload {
    postSent: PostPopulated
}

export type PostPopulated = Prisma.PostGetPayload<{
    include: typeof postPopulated;
  }>;