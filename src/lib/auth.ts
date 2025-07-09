import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Extend the Session and User types to include 'role'
declare module "next-auth" {
  interface Session {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string | null;
    };
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const adminEmails = ["admin@gmail.com"];
      if (session.user) {
        session.user.role = adminEmails.includes(session.user.email!) ? "admin" : "user";
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
