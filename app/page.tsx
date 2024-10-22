'use client'

import Link from 'next/link';
import { useAuth } from '../lib/AuthContext';

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Welcome to Our App</h1>
      {user ? (
        <p>You are logged in. <Link href="/dashboard">Go to Dashboard</Link></p>
      ) : (
        <div>
          <p>Please log in or register to continue.</p>
          <Link href="/auth" className="mr-4">Login/Register</Link>
        </div>
      )}
    </div>
  );
}