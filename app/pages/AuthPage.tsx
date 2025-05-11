import React, { useState } from 'react';

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica de autenticação com Supabase
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">{isLogin ? 'Login' : 'Cadastro'}</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" htmlFor="password">Senha</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <button type="submit" className="w-full bg-purple-500 text-white p-2 rounded hover:bg-purple-600 transition">
          {isLogin ? 'Entrar' : 'Cadastrar'}
        </button>
        <p className="mt-4 text-sm text-center">
          {isLogin ? 'Não tem uma conta? ' : 'Já tem uma conta? '}
          <button
            type="button"
            onClick={() => setIsLogin(!isLogin)}
            className="text-purple-500 hover:underline"
          >
            {isLogin ? 'Cadastre-se' : 'Login'}
          </button>
        </p>
      </form>
    </div>
  );
};

export default AuthPage;
