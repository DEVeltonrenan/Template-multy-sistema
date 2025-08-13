 
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select"
import { Button } from "./ui/button"
import { Separator } from "./ui/separator"

export default function MeuComponente({ titulo, descricao }) {
  // Aqui você pode adicionar hooks ou funções
  // Ex: const [state, setState] = useState('');

  return (
      <form  className="space-y-6">
      {/* Sistema NBS */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            Sistema NBS
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Primeiro nome do contribuinte *</Label>
              <Input
                id="firstName"
              
                onChange={(e) => console.log('firstName', e.target.value)}
                placeholder="Digite o primeiro nome"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="gender">Sexo *</Label>
              <Select onValueChange={(value) => console.log('gender', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o sexo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feminino">Feminino</SelectItem>
                  <SelectItem value="masculino">Masculino</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employeeEmail">E-mail do colaborador *</Label>
              <Input
                id="employeeEmail"
                type="email"
                onChange={(e) => console.log('employeeEmail', e.target.value)}
                placeholder="colaborador@empresa.com"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="managerEmail">E-mail do gestor responsável</Label>
              <Input
                id="managerEmail"
                type="email"
                onChange={(e) => console.log('managerEmail', e.target.value)}
                placeholder="gestor@empresa.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="serverLogin">
                Usuário de login do servidor
                <span className="text-sm text-muted-foreground ml-2">(formato: nome.sobrenome)</span>
              </Label>
              <div className="flex gap-2">
                <Input
                  id="serverLogin"
                  onChange={(e) => console.log('serverLogin', e.target.value)}
                  placeholder="nome.sobrenome"
                />
                <Button type="button" variant="outline">
                  Gerar
                </Button>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="nbsLogin">Login NBS</Label>
              <Input
                id="nbsLogin"
                onChange={(e) => console.log('nbsLogin', e.target.value)}
                placeholder="Login para o sistema NBS"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nbsPassword">Primeira senha fixa (definida pela empresa)</Label>
            <Input
              id="nbsPassword"
              type="password"
              onChange={(e) => console.log('nbsPassword', e.target.value)}
              placeholder="Senha inicial do sistema NBS"
            />
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Sistema Holmes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            Sistema Holmes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="holmesLogin">Login (e-mail corporativo)</Label>
            <Input
              id="holmesLogin"
              type="email"
              onChange={(e) => console.log('holmesLogin', e.target.value)}
              placeholder="usuario@empresa.com"
            />
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Intranet */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            Intranet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="intranetLogin">Login (e-mail corporativo ou CPF)</Label>
            <Input
              id="intranetLogin"
              onChange={(e) => console.log('intranetLogin', e.target.value)}
              placeholder="usuario@empresa.com ou 000.000.000-00"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="intranetPassword">Senha fixa</Label>
            <Input
              id="intranetPassword"
              type="password"
              onChange={(e) => console.log('intranetPassword', e.target.value)}
              placeholder="raviera2025"
              disabled
              className="bg-muted"
            />
            <p className="text-sm text-muted-foreground">Senha padrão: raviera2025</p>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={() => {
          console.log({
            firstName: '',
            employeeEmail: '',
            managerEmail: '',
            gender: '',
            serverLogin: '',
            nbsLogin: '',
            nbsPassword: '',
            holmesLogin: '',
            intranetLogin: '',
            intranetPassword: 'raviera2025'
          });
        }}>
          Limpar
        </Button>
        <Button type="submit">
          Cadastrar Usuário
        </Button>
      </div>
    </form>
  );
}