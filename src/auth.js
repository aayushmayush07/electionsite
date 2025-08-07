import GoogleProvider from 'next-auth/providers/google';
import dbConnect from '../lib/mongodb';
import User from '../models/User';

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],

  /* Tell NextAuth to use our custom /login page */
  pages: { signIn: '/login' },

//   call back is a function that willl be called when you will click sign in  with google on login page
  callbacks: { 
    /**
     * 1. Ensure a User doc exists (create on first login)
     * 2. Promote the very first account to admin automatically
     */
    async signIn({ user }) {
      await dbConnect();

      let dbUser = await User.findOne({ email: user.email });
      if (!dbUser) {
        const isFirstUser = (await User.estimatedDocumentCount()) === 0;
        dbUser = await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
          isAdmin: isFirstUser // first registered user → admin
        });
      }

      return true; // allow sign-in
    },

    /**
     * Expose userId & isAdmin to the client session
     */
    async session({ session }) {
      await dbConnect();
      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.id = dbUser._id.toString();
        session.user.isAdmin = dbUser.isAdmin;
      }
      return session;
    },

    /** Always send users to the homepage after auth */
    async redirect() {
      return '/';
    }
  }
};
