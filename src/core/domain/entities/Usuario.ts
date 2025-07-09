export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}
export interface Usuario {
  id: string;
  nome: string;
  email: string;
  senha: string;
  papel: 'usuario' | 'admin';
}
