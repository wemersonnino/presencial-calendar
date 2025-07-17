export interface AuthCredentials {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string | null;
  role?: string;
  nome?: string;
}
