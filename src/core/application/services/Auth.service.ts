import { AuthPort } from '@/core/application/ports/AuthPort';
import { FirebaseAdapter } from '@/core/infrastructure/adapters/Firebase.adapter';
import { LoginEntities } from '@/interfaces/login.entities';
import { RegisterEntities } from '@/interfaces/register.entities';
import { UserDTO } from '@/interfaces/user.entities';

export class AuthService {
  private static instance: AuthService;
  private readonly authPort: AuthPort;

  private constructor() {
    this.authPort = new FirebaseAdapter();
  }

  public static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  public login(email: string, password: string): Promise<LoginEntities> {
    // Implement login logic here
    console.log(`Logging in user: ${email}`);
    return this.authPort.login(email, password);
  }

  public register(email: string, password: string, nome?: string): Promise<RegisterEntities> {
    // Implement registration logic here
    console.log(`Registering user: ${email}`);
    return this.authPort.register(email, password, nome);
  }

  public logout(): Promise<void> {
    // Implement logout logic here
    console.log('Logging out user');
    return this.authPort.logout();
  }

  public isAuthenticated(): Promise<boolean> {
    // Implement authentication check logic here
    return this.authPort.isAuthenticated(); // Return true if user is authenticated
  }

  public getUser(): Promise<UserDTO | null> {
    // Implement user retrieval logic here
    return this.authPort.getUser(); // Return user data if authenticated
  }
}
