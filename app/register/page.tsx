
// File: /app/register/page.tsx
import RegisterForm from '../../components/RegisterForm';

export default function RegisterPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Register</h1>
      <RegisterForm />
    </div>
  );
}