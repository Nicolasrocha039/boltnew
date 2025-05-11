import React from 'react';
import { useHistory } from 'react-router-dom';

const MainPage = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push('/auth'); // Redireciona para a página de autenticação
  };

  const handleRegister = () => {
    history.push('/auth'); // Redireciona para a página de autenticação
  };

  return (
    <div className="flex flex-col items-center justify-between min-h-screen bg-gray-100">
      <header className="w-full bg-purple-500 text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Título da Aplicação</h1>
      </header>

      <main className="flex flex-col items-center justify-center flex-grow">
        <h2 className="text-xl font-semibold mb-6">Bem-vindo à nossa aplicação!</h2>
        <div className="flex flex-col space-y-4">
          <button
            onClick={handleLogin}
            className="w-64 bg-purple-600 text-white p-3 rounded hover:bg-purple-700 transition"
          >
            Login
          </button>
          <button
            onClick={handleRegister}
            className="w-64 bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
          >
            Cadastro
          </button>
        </div>
      </main>

      <footer className="w-full bg-gray-800 text-white p-4 text-center">
        <p>Contato: info@exemplo.com</p>
      </footer>
    </div>
  );
};

export default MainPage;
