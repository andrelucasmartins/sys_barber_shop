import { PrismaClient } from "@prisma/client";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from 'next-auth/providers/credentials';

const prisma = new PrismaClient()

// import bcrypt from "bcrypt";

export const authOptions: NextAuthOptions = {
  // adapter: PrismaAdapter(prisma),
  providers: [
    // CredentialsProvider({
    //   name: "credentials",
    //   credentials: {},
    //   async authorize(credentials: any) {
    //     const { email, password } = credentials

    //     try {
    //       const user = await prisma.user.findUnique({
    //         where: {
    //           email
    //         }
    //       })

    //       if(!user) {
    //         return null;
    //       }

    //       const passwordsMath = await bcrypt.compare(password, user.password)

    //       if(!passwordsMath) {
    //         return null
    //       }

    //       return user

    //     } catch (error) {
    //       console.log("Error: ", error)
    //       return null
    //     }
    //   },
    // }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        // const res = await fetch("/your/endpoint", {
        //   method: "POST",
        //   body: JSON.stringify(credentials),
        //   headers: { "Content-Type": "application/json" },
        // });
        // const user = await res.json();

        // if (res.ok && user) {
        //   return user;
        // }

        if (!credentials) {
          return null;
        }

        // if(credentials.username === user.username && credentials.password === user.password) {
        //   return user
        // }

        if (
          credentials.username === "andre@gmail.com" &&
          credentials.password === "123"
        ) {
          return {
            id: "1",
            name: "Andre",
            email: "andre@gmail.com",
          };
        }

        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_URL,
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
};