import NextAuth, { AuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { AuthService } from '@/core/application/services/Auth.service';
import { AuthUser } from '@/interfaces/auth.entities';

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials): Promise<AuthUser | null> {
        if (!credentials?.email || !credentials.password) return null;

        const authService = AuthService.getInstance();

        try {
          const user = await authService.login(credentials.email, credentials.password);
          return {
            id: user.uid,
            email: user.email,
            role: user.role,
            nome: user.nome,
          };
        } catch (error) {
          console.error('Erro ao autenticar:', error);
          return null;
        }
      },
    }),
  ],
  session: { strategy: 'jwt' },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.nome = user.nome;
        token.email = user.email;
      }
      return token;
    },
    session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id!;
        session.user.role = token.role;
        session.user.nome = token.nome;
        session.user.email = token.email!;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
    error: '/login?error=auth',
  },
};

export const handler = NextAuth(authOptions);
