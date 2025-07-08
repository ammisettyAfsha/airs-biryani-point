'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    // Clear auth on login page load to avoid confusion
    localStorage.removeItem('admin-auth');
  }, []);

  const handleLogin = () => {
    if (password === 'Suneera123#') {
      localStorage.setItem('admin-auth', 'true');
      router.push('/admin');
    } else {
      alert('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-yellow-100 p-6">
      <div className="bg-white shadow-md rounded p-6 max-w-sm w-full">
        <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
        <input
          type="password"
          placeholder="Enter admin password"
          className="w-full p-2 border rounded mb-4"
          value={password}
          onChange={e => setPassword(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') handleLogin(); }}
        />
        <button
          className="w-full bg-yellow-600 text-white py-2 rounded hover:bg-yellow-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
}
