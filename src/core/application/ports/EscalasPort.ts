import { Escala } from '@/schemas/escalas.schema';

export interface EscalasPort {
  getByUserId: (userId: string) => Promise<Escala[]>;
}
