import { UserRegistrationForm } from './components/UserRegistrationForm';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 text-center">
            <h1 className="mb-2">Cadastro de Usuário Multi-Sistema</h1>
            <p className="text-muted-foreground">
              Preencha as informações necessárias para criar acessos nos sistemas NBS, Holmes e Intranet
            </p>
          </div>
          
          <UserRegistrationForm />
        </div>
      </div>
      <Toaster />
    </div>
  );
}
