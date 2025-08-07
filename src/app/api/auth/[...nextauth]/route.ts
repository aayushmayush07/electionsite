import NextAuth from 'next-auth';
import { authOptions } from '@/auth';

// App Router style: export both verbs
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
