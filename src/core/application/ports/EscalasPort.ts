import { Escala } from '@/schemas/escalas.schema';

export interface EscalasPort {
  getByUserEmail: (userEmail: string) => Promise<Escala[]>;
}
