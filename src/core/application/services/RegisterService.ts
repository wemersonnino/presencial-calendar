import { RegisterEntitie } from '@/interfaces/registerEntitie';
import { RegisterPort } from '@/core/application/ports/RegisterPort';

export class RegisterService {
  private static instance: RegisterService;
  private readonly registerPort: RegisterPort;

  private constructor(registerPort: RegisterPort) {
    this.registerPort = registerPort;
  }

  async register(data: RegisterEntitie): Promise<void> {
    return this.registerPort.register(data);
  }

  public static getInstance(registerPort: RegisterPort): RegisterService {
    if (!RegisterService.instance) {
      RegisterService.instance = new RegisterService(registerPort);
    }
    return RegisterService.instance;
  }
}
