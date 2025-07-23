'use server';

import { EscalasService } from '@/core/application/services/Escalas.service';
import { Escala } from '@/schemas/escalas.schema';

export async function getEscalasByUser(userId: string): Promise<Escala[]> {
  const service = EscalasService.getInstance();
  return await service.getEscalas(userId);
}
