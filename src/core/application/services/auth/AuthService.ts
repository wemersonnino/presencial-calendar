import { IAuthPort } from "../../ports/IAuthPort";

export class AuthService {
  constructor(private readonly authPort: IAuthPort) {}

  async loginWithGoogle() {
    return this.authPort.signInWithGoogle();
  }

  async getCurrentUser() {
    return this.authPort.getUserSession();
  }
}
