// File: /app/login/page.tsx
//import LoginForm from '../../components/LoginForm';

import LoginForm from "@/components/LoginForm";

export default function LoginPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Login</h1>
      <LoginForm />
    </div>
  );
}