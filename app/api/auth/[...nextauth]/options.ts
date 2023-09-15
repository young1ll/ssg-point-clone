import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import KakaoProvider from "next-auth/providers/kakao";
import NaverProvider from "next-auth/providers/naver";
import GoogleProvider from "next-auth/providers/google";

import { KEY } from "@/utils/KeyHelper";

import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt";

// declare module "next-auth" {
//   interface Session {
//     data:{
//       user: {
//         name: string
//         point: number|string
//         user: {
//           name: string
//           point: number|string
//         }
//       }
//     }
//       user: {
//         user: {
//           name: string
//           phone: string
//           address: string
//           uuid: string
//           point: string| number
//           bardCode: string
//         }
//         bardCode: string
//         access_token: string
//         token: JWT
//         uuid: string
//       } & DefaultSession["user"]
//   }
// }

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        loginId: { label: KEY.USERID, type: "text" },
        password: { label: KEY.USERPASSWORD, type: "password" },
      },
      async authorize(credentials, req) {
        if (!credentials?.loginId || !credentials.password) return null;

        const res = await fetch("http://3.35.193.212:8000/api/v1/auth/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(credentials),
        });

        if (res.ok) {
          const user = await res.json();
          console.log(user);
          // localStorage.setItem("userInfo", JSON.stringify(user));
          return user;
        } else {
          console.log(res);
          return null;
        }
      },
    }),

    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.KAKAO_CLIENT_SECRET!,
    }),
    NaverProvider({
      clientId: process.env.NAVER_CLIENT_ID!,
      clientSecret: process.env.NAVER_CLIENT_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },

    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      else if (new URL(url).origin === baseUrl) return url;

      return baseUrl;
    },
  },

  pages: {
    signIn: "/login",
  },
};
