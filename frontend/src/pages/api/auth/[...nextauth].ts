import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import EmailProvider from "next-auth/providers/email"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
// import prisma from "../../lib/prismadb"
import { PrismaClient } from "@prisma/client"

// Konfiguracja adaptera NextAuth - Prisma

console.log("prisma:")
const prisma = new PrismaClient()

export default NextAuth({
  adapter: PrismaAdapter(prisma),
    
  providers: [
    // Login with email
    // EmailProvider({
    //     server: process.env.EMAIL_SERVER,
    //     from: process.env.EMAIL_FROM,
    // }),
    // login with google
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token, user }) {
      console.log(user)
      return {...session, user: {...session.user, ...user} }
    },
  },
})