export const httpClient = async <T>(url: string, options?: RequestInit): Promise<T> => {
  const response = await fetch(url, {
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  if (!response.ok) throw new Error(`Erro HTTP: ${response.statusText}`);

  return (await response.json()) as T;
};
