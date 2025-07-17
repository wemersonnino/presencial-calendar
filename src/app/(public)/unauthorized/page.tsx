export default function UnauthorizedPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-white text-center">
      <div>
        <h1 className="text-3xl font-bold text-red-600">Acesso Negado</h1>
        <p className="mt-2 text-gray-600">Você não tem permissão para acessar esta área.</p>
      </div>
    </div>
  );
}
