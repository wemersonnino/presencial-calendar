import { RegisterPort } from '@/core/application/ports/RegisterPort';
import { RegisterEntities } from '@/interfaces/register.entities';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '@/lib/firebase';
const db = getFirestore();
import { doc, getFirestore, setDoc } from 'firebase/firestore';

export class RegisterFirebaseAdapter implements RegisterPort {
  async register(data: RegisterEntities): Promise<void> {
    const { email, senha, nome } = data;

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
      const user = userCredential.user;

      await updateProfile(user, { displayName: nome });

      // Armazena os dados no Firestore
      await setDoc(doc(db, 'usuarios', email), {
        nome,
        email,
        role: 'usuario',
        ativo: true,
        permissaoId: 'usuario',
        criadoEm: new Date(),
      });
    } catch (error: unknown) {
      const firebaseError = error as { code?: string };
      if (firebaseError.code === 'auth/email-already-in-use') {
        throw new Error('Email já está em uso');
      }
      throw new Error('Erro ao registrar usuário');
    }
  }
}
