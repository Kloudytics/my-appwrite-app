# Next.js 14 with Appwrite Authentication

A modern web application demonstrating authentication implementation using Next.js 14 (App Router) and Appwrite as the backend service.

## Features

- 🔐 Full authentication system (login/register/logout)
- 📱 Responsive design using Tailwind CSS
- 🔄 Real-time authentication state management using React Context
- 🛡️ Protected routes
- 🎯 TypeScript support
- 🚀 Next.js 14 App Router architecture
- 🔥 Client-side authentication handling
- 📝 Form validation and error handling

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [Appwrite](https://appwrite.io/) - Backend as a Service (BaaS)
- [TypeScript](https://www.typescriptlang.org/) - Type checking
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- React Context - State management

## Project Structure

```
/app
  /auth
    page.tsx          # Combined login/register page
  /dashboard
    page.tsx          # Protected dashboard page
  layout.tsx          # Root layout
  page.tsx            # Home page
/lib
  appwrite.ts         # Appwrite client configuration
  AuthContext.tsx     # Authentication context and provider
```

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- An Appwrite account and project

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_APPWRITE_ENDPOINT=your_appwrite_endpoint
NEXT_PUBLIC_APPWRITE_PROJECT_ID=your_project_id
```

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Implementation Details

### Authentication Flow

The application implements a complete authentication flow using Appwrite's authentication services:

1. **User Registration**: New users can create an account using email and password
2. **User Login**: Existing users can log in using their credentials
3. **Session Management**: Active sessions are managed using React Context
4. **Protected Routes**: Certain routes are protected and only accessible to authenticated users
5. **Logout**: Users can safely log out, clearing their session

### Context API Usage

The application uses React's Context API for global state management:

- `AuthContext` provides authentication state and methods
- `AuthProvider` wraps the application and manages authentication state
- `useAuth` hook provides easy access to authentication functions and state

### Appwrite Integration

The project uses Appwrite as the backend service, specifically:

- User authentication and session management
- Secure credential handling
- Token-based authentication

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Appwrite Documentation](https://appwrite.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## Future Enhancements

- [ ] Add email verification
- [ ] Implement password reset functionality
- [ ] Add social authentication providers
- [ ] Implement role-based access control
- [ ] Add user profile management
- [ ] Integrate with Appwrite database for user data storage