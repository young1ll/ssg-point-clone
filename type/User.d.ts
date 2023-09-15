import NextAuth, { DefaultSession } from "next-auth/next";
export interface SessionUser extends DefaultSession["user"] {
  uuid: string;
  id: string;
  name?: string;
  email?: string;
  token?: string;
}
