import { IAuthPort } from "@/core/application/ports/IAuthPort";
import { User } from "@/core/domain/entities/Usuario";
import { signIn } from "next-auth/react";

export class FirebaseAuthAdapter implements IAuthPort {
  async signInWithGoogle(): Promise<User> {
    await signIn('google');
    return Promise.resolve({ id: "1", name: "User", email: "user@example.com", role: "user" });
  }

  async getUserSession(): Promise<User | null> {
    // Retorne user atual pela session NextAuth
    return null; //implementar de acordo com NextAuth
  }
}
