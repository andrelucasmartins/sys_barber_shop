import prisma from "@/lib/db";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  // secret: process.env.NEXTAUTH_URL,
  pages: {
    signIn: "/signin",
    error: "/signin",
  },
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
        email: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });

          if (!user) {
            return null;
          }

          // const passwordsMath = await bcrypt.compare(credentials?.password!, user.password);

          // if(!passwordsMath) {
          //   return null
          // }

          if(credentials?.email === user.email && credentials.password === user.password) {
            return user
          }

          return null;
        } catch (error) {
          console.log("Error: ", error)
          return null
        }

      },
    }),
  ],
  callbacks: {
    async session({ token, session }) {
      if(token) {
        session.user.id = token.id
        session.user.name = token.name
        session.user.email = token.email
        session.user.role = token.role
        session.user.image = token.picture
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await prisma.user.findUnique({
        where: {
         email: token.email!,
        }
      })

      if(!dbUser) {
        token.id = user!.id
        return token
      }

      return {
        id: dbUser.id,
        username: dbUser.username,
        email: dbUser.email,
        picture: dbUser.image,
        role: dbUser.role,
      }
    }
  },
});

export { handler as GET, handler as POST };

