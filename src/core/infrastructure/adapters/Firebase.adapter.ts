import { AuthPort } from '@/core/application/ports/AuthPort';
import { auth } from '@/lib/firebase';
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { LoginEntities } from '@/interfaces/login.entities';
import { UserDTO } from '@/interfaces/user.entities';
import { RegisterEntities } from '@/interfaces/register.entities';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { FirebaseError } from '@firebase/app';
const db = getFirestore();

export class FirebaseAdapter implements AuthPort {
  async login(email: string, password: string): Promise<LoginEntities> {
    if (!email) throw new Error('Email obrigatório');

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const userDoc = await getDoc(doc(db, 'usuarios', user.email!));
      if (!userDoc.exists()) throw new Error('Usuário não encontrado no Firestore');

      const userData = userDoc.data();

      return {
        uid: user.uid,
        email: user.email!,
        role: userData.role ?? 'user',
        nome: userData.nome ?? '',
      };
    } catch (error) {
      console.error('Erro no login FirebaseAdapter:', error);
      if (error instanceof FirebaseError) {
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          throw new Error('Credenciais inválidas');
        }
      }

      throw new Error('Erro desconhecido ao fazer login.');
    }
  }

  async register(email: string, password: string, nome?: string): Promise<RegisterEntities> {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (nome) {
      await updateProfile(user, { displayName: nome });
    }

    // Aqui você poderia salvar a role no Firestore, por exemplo.

    return {
      email: email,
      senha: password,
      nome: nome,
      role: 'user',
    };
  }

  async logout(): Promise<void> {
    return signOut(auth);
  }

  async isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, (user) => {
        resolve(!!user);
        unsubscribe();
      });
    });
  }

  async getUser(): Promise<UserDTO | null> {
    return new Promise((resolve) => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          const userDoc = await getDoc(doc(db, 'usuarios', user.email!));
          const userData = userDoc.exists() ? userDoc.data() : {};

          resolve({
            uid: user.uid,
            email: user.email!,
            role: userData.role ?? 'user',
          });
        } else {
          resolve(null);
        }
        unsubscribe();
      });
    });
  }
}
