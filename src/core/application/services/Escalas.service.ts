import { EscalasPort } from '../ports/EscalasPort';
import { FirebaseEscalasAdapter } from '@/core/infrastructure/adapters/FirebaseEscalas.adapter';
import { Escala } from '@/schemas/escalas.schema';

export class EscalasService {
  private static instance: EscalasService;
  private readonly adapter: EscalasPort;

  private constructor() {
    this.adapter = new FirebaseEscalasAdapter();
  }

  public static getInstance(): EscalasService {
    if (!EscalasService.instance) {
      EscalasService.instance = new EscalasService();
    }
    return EscalasService.instance;
  }

  public async getEscalas(userId: string): Promise<Escala[]> {
    return this.adapter.getByUserId(userId);
  }
}
