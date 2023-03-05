import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// https://github.com/nextauthjs/next-auth/pull/6777

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!
    })
  ]
};
export default NextAuth(authOptions);
