import { RegisterEntities } from '@/interfaces/register.entities';

export interface RegisterPort {
  register(data: RegisterEntities): Promise<void>;
}
