'use server';

import { firestore } from '@/lib/firebase';
import { doc, getDoc } from 'firebase/firestore';

export async function getUserPerfil(email: string) {
  try {
    const docRef = doc(firestore, 'usuarios', email);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
      throw new Error('Usuário não encontrado');
    }

    return {
      success: true,
      data: docSnap.data(),
    };
  } catch (error) {
    console.error('Erro ao buscar perfil:', error);
    return {
      success: false,
      error: 'Erro ao buscar perfil do usuário',
    };
  }
}
