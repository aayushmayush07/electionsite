import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '../lib/mongodb';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  callbacks: {
    // example: attach mongo connection for server actions
    async session({ session }) {
      await dbConnect();
      return session; // you can also whitelist user role/email here
    }
  }
};
