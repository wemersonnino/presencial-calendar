'use client';

import { useEffect, useState } from 'react';
import { Escala } from '@/schemas/escalas.schema';
import { EscalasService } from '@/core/application/services/Escalas.service';
import { useUser } from '@/context/UserContext';

export function useEscalas() {
  const { user } = useUser();
  const [escalas, setEscalas] = useState<Escala[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    EscalasService.getInstance()
      .getEscalas(user.id)
      .then(setEscalas)
      .catch((err) => console.error('Erro ao buscar escalas:', err))
      .finally(() => setLoading(false));
  }, [user]);

  return { escalas, loading };
}
