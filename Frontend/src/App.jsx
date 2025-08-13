import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion"
import MeuComponente from "./components/formulary"


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
             <MeuComponente 
        titulo="Olá, mundo!" 
        descricao="Este é um componente boilerplate em React." 
      />
          </div>
        </div>
      </div>
    </div>
  )
}