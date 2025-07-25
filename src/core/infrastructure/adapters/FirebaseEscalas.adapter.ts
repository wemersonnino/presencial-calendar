import { EscalasPort } from '@/core/application/ports/EscalasPort';
import { Escala, escalasArraySchema } from '@/schemas/escalas.schema';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

const db = getFirestore();

export class FirebaseEscalasAdapter implements EscalasPort {
  async getByUserEmail(userEmail: string): Promise<Escala[]> {
    const q = query(collection(db, 'escalas'), where('emailUsuario', '==', userEmail));
    const snapshot = await getDocs(q);
    const escalas: Escala[] = [];

    snapshot.forEach((doc) => {
      escalas.push({
        id: doc.id,
        ...doc.data(),
      } as Escala);
    });

    const parsed = escalasArraySchema.safeParse(escalas);
    if (!parsed.success) throw new Error('Erro ao validar dados de escalas');

    return parsed.data;
  }
}
