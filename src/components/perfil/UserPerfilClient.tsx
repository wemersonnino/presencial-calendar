'use client';

import { cn } from '@/lib/utils';

interface UserPerfilClientProps {
  nome: string;
  email: string;
  role?: string;
  podeEditar?: boolean;
  podeVisualizar?: boolean;
  gerenciaUsuarios?: boolean;
  descricao?: string;
}

export function UserPerfilClient({
  nome,
  email,
  role,
  podeEditar,
  podeVisualizar,
  gerenciaUsuarios,
  descricao,
}: UserPerfilClientProps) {
  return (
    <div className="space-y-4 p-4">
      <h1 className="text-2xl font-bold">Perfil do Usuário</h1>
      <p>
        <strong>Nome:</strong> {nome}
      </p>
      <p>
        <strong>Email:</strong> {email}
      </p>
      {role && (
        <p>
          <strong>Permissão:</strong> {role}
        </p>
      )}
      {descricao && (
        <p>
          <strong>Descrição:</strong> {descricao}
        </p>
      )}
      <div className="space-y-1">
        <p>
          <strong>Pode editar?</strong> {podeEditar ? 'Sim' : 'Não'}
        </p>
        <p>
          <strong>Pode visualizar?</strong> {podeVisualizar ? 'Sim' : 'Não'}
        </p>
        <p>
          <strong>Gerencia usuários?</strong> {gerenciaUsuarios ? 'Sim' : 'Não'}
        </p>
      </div>
    </div>
  );
}
