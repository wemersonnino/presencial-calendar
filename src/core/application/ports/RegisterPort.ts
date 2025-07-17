import { RegisterEntitie } from '@/interfaces/registerEntitie';

export interface RegisterPort {
  register(data: RegisterEntitie): Promise<void>;
}
