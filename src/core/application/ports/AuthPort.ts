import { UserDTO } from '@/interfaces/user.entities';
import { LoginEntities } from '@/interfaces/login.entities';
import { RegisterEntities } from '@/interfaces/register.entities';

export interface AuthPort {
  /**
   * Autentica o usuário com email e senha.
   */
  login(email: string, password: string): Promise<LoginEntities>;

  /**
   * Cria um novo usuário com nome opcional.
   */
  register(email: string, password: string, nome?: string): Promise<RegisterEntities>;
  logout: () => Promise<void>;
  isAuthenticated: () => Promise<boolean>;
  getUser: () => Promise<UserDTO | null>;
}
