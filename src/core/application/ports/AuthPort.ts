import { UserDTO } from '@/interfaces/userEntitie';
import { LoginEntitie } from '@/interfaces/loginEntitie';
import { RegisterEntitie } from '@/interfaces/registerEntitie';

export interface AuthPort {
  /**
   * Autentica o usuário com email e senha.
   */
  login(email: string, password: string): Promise<LoginEntitie>;

  /**
   * Cria um novo usuário com nome opcional.
   */
  register(email: string, password: string, nome?: string): Promise<RegisterEntitie>;
  logout: () => Promise<void>;
  isAuthenticated: () => Promise<boolean>;
  getUser: () => Promise<UserDTO | null>;
}
