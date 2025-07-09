import { User } from "@/core/domain/entities/Usuario";

export interface IAuthPort {
  signInWithGoogle(): Promise<User>;
  getUserSession(): Promise<User | null>;
}
