 
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./card"
import { Label } from "./label"
import { Input } from "./input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./select"
import { Button } from "./button"
import { Separator } from "./separator"
import { useState } from "react";



// export default function MeuComponente({ }) {
//   // Aqui você pode adicionar hooks ou funções
//   // Ex: const [state, setState] = useState('');

//   return (
//       <form  className="space-y-6">
//         {/*Servidor Logon*/}
//         <Card>
//           <CardHeader>
//             <CardTitle className="flex items-center gap-2">
//               <div className="w-3 h-3 rounded-full bg-purple-500"></div>
//               Servidor Logon
//             </CardTitle>
//           </CardHeader>
//           <CardContent className="space-y-4">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="serverLogin">Usuário de login do servidor</Label>
//                 <Input
//                   id="serverLogin"
//                   onChange={(e) => console.log('serverLogin', e.target.value)}
//                   placeholder="nome.sobrenome"
//                 />
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="serverPassword">Senha do servidor</Label>
//                 <Input
//                   id="serverPassword"
//                   type="password"
//                   onChange={(e) => console.log('serverPassword', e.target.value)}
//                   placeholder="@Rav#0.24" 
//                   disabled
//                 />
//               </div>
//             </div>
//           </CardContent>
//         </Card> 

//       {/* Sistema NBS */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <div className="w-3 h-3 rounded-full bg-blue-500"></div>
//             Sistema NBS
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="firstName">Primeiro nome</Label>
//               <Input
//                 id="firstName"
              
//                 onChange={(e) => console.log('firstName', e.target.value)}
//                 placeholder="Digite o primeiro nome"
//                 required
//               />
//             </div>
            

//             <div className="space-y-2">
//               <Label htmlFor="gender">Sexo </Label>
//               <Select onValueChange={(value) => console.log('gender', value)}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Selecione o sexo" />
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectItem value="feminino">Feminino</SelectItem>
//                   <SelectItem value="masculino">Masculino</SelectItem>
//                 </SelectContent>
//               </Select>
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <div className="space-y-2">
//               <Label htmlFor="employeeEmail">E-mail do colaborador </Label>
//               <Input
//                 id="employeeEmail"
//                 type="email"
//                 onChange={(e) => console.log('employeeEmail', e.target.value)}
//                 placeholder="colaborador@empresa.com"
//                 required
//               />
//             </div>
            
//             <div className="space-y-2">
//               <Label htmlFor="managerEmail">E-mail do gestor responsável</Label>
//               <Input
//                 id="managerEmail"
//                 type="email"
//                 onChange={(e) => console.log('managerEmail', e.target.value)}
//                 placeholder="gestor@empresa.com"
//               />
//             </div>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
            
//             <div className="space-y-2">
//               <Label htmlFor="nbsLogin">Login NBS</Label>
//               <Input
//                 id="nbsLogin"
//                 onChange={(e) => console.log('nbsLogin', e.target.value)}
//                 placeholder="Login para o sistema NBS"
//               />
//             </div>
//           </div>

//           <div className="space-y-2">
//             <Label htmlFor="nbsPassword">Primeira senha fixa (definida pela empresa)</Label>
//             <Input
//               id="nbsPassword"
//               type="password"
//               onChange={(e) => console.log('nbsPassword', e.target.value)}
//               placeholder="Senha inicial do sistema NBS"
//             />
//           </div>
//       </CardContent>
//       </Card>
      

//       <Separator />

//       {/* Sistema Holmes */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <div className="w-3 h-3 rounded-full bg-green-500"></div>
//             Sistema Holmes
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-2">
//             <Label htmlFor="holmesLogin">Login (e-mail corporativo)</Label>
//             <Input
//               id="holmesLogin"
//               type="email"
//               onChange={(e) => console.log('holmesLogin', e.target.value)}
//               placeholder="usuario@empresa.com"
//             />
//           </div>
//         </CardContent>
//       </Card>

//       <Separator />

//       {/* Intranet */}
//       <Card>
//         <CardHeader>
//           <CardTitle className="flex items-center gap-2">
//             <div className="w-3 h-3 rounded-full bg-orange-500"></div>
//             Intranet
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-4">
//           <div className="space-y-2">
//             <Label htmlFor="intranetLogin">Login (e-mail corporativo ou CPF)</Label>
//             <Input
//               id="intranetLogin"
//               onChange={(e) => console.log('intranetLogin', e.target.value)}
//               placeholder="usuario@empresa.com ou 000.000.000-00"
//             />
//           </div>
          
//           <div className="space-y-2">
//             <Label htmlFor="intranetPassword">Senha fixa</Label>
//             <Input
//               id="intranetPassword"
//               type="password"
//               onChange={(e) => console.log('intranetPassword', e.target.value)}
//               placeholder="raviera2025"
//               disabled
//               className="bg-muted"
//             />
//             <p className="text-sm text-muted-foreground">Senha padrão: raviera2025</p>
//           </div>
//         </CardContent>
//       </Card>

//       <div className="flex justify-end gap-4">
//         <Button type="button" variant="outline" onClick={() => {
//           console.log({
//             firstName: '',
//             employeeEmail: '',
//             managerEmail: '',
//             gender: '',
//             serverLogin: '',
//             serverPassword: '',
//             nbsLogin: '',
//             nbsPassword: '',
//             holmesLogin: '',
//             intranetLogin: '',
//             intranetPassword: 'raviera2025'
//           });
//         }}>
//           Limpar
//         </Button>
//         <Button type="submit">
//           Enviar E-mails
//         </Button>
//       </div>
//     </form>
//   );
// }

export default function MeuComponente() {
  const [formValues, setFormValues] = useState({
    firstName: '',
    employeeEmail: '',
    managerEmail: '',
    gender: '',
    serverLogin: '',
    serverPassword: '',
    nbsLogin: '',
    nbsPassword: '',
    holmesLogin: '',
    intranetLogin: '',
    intranetPassword: 'raviera2025'
  });

  const [errors, setErrors] = useState({});

  const handleChange = (field, value) => {
    setFormValues((prev) => ({ ...prev, [field]: value }));
  };

  // Validação simples
  const validate = () => {
    let newErrors = {};
    if (!formValues.serverLogin.trim()) newErrors.serverLogin = "Usuário do servidor é obrigatório";
    if (!formValues.firstName.trim()) newErrors.firstName = "Primeiro nome é obrigatório";
    if (!formValues.employeeEmail.trim()) newErrors.employeeEmail = "E-mail do colaborador é obrigatório";
    if (!formValues.gender.trim()) newErrors.gender = "Selecione o sexo";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Envio do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Valores do formulário:", formValues);
    }
  };

  // Limpa os campos
  const handleClear = () => {
    setFormValues({
      serverLogin: "",
      serverPassword: "",
      firstName: "",
      gender: "",
      employeeEmail: "",
      managerEmail: "",
      nbsLogin: "",
      nbsPassword: "",
      holmesLogin: "",
      intranetLogin: "",
      intranetPassword: "raviera2025"
    });
    setErrors({});
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Servidor Logon */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            Servidor Logon
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="serverLogin">Usuário de login do servidor</Label>
              <Input
                id="serverLogin"
                value={formValues.serverLogin}
                onChange={(e) => handleChange("serverLogin", e.target.value)}
                placeholder="nome.sobrenome"
              />
              {errors.serverLogin && <p className="text-red-500 text-sm">{errors.serverLogin}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="serverPassword">Senha do servidor</Label>
              <Input
                id="serverPassword"
                type="password"
                value={formValues.serverPassword}
                onChange={(e) => handleChange("serverPassword", e.target.value)}
                placeholder="@Rav#0.24"
                disabled
              />
            </div>
          </div>
        </CardContent>
      </Card>

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
              <Label htmlFor="firstName">Primeiro nome</Label>
              <Input
                id="firstName"
                value={formValues.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                placeholder="Digite o primeiro nome"
                required
              />
              {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="gender">Sexo</Label>
              <Select
                value={formValues.gender}
                onValueChange={(value) => handleChange("gender", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o sexo" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="feminino">Feminino</SelectItem>
                  <SelectItem value="masculino">Masculino</SelectItem>
                </SelectContent>
              </Select>
              {errors.gender && <p className="text-red-500 text-sm">{errors.gender}</p>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="employeeEmail">E-mail do colaborador</Label>
              <Input
                id="employeeEmail"
                type="email"
                value={formValues.employeeEmail}
                onChange={(e) => handleChange("employeeEmail", e.target.value)}
                placeholder="colaborador@empresa.com"
                required
              />
              {errors.employeeEmail && <p className="text-red-500 text-sm">{errors.employeeEmail}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="managerEmail">E-mail do gestor responsável</Label>
              <Input
                id="managerEmail"
                type="email"
                value={formValues.managerEmail}
                onChange={(e) => handleChange("managerEmail", e.target.value)}
                placeholder="gestor@empresa.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="nbsLogin">Login NBS</Label>
              <Input
                id="nbsLogin"
                value={formValues.nbsLogin}
                onChange={(e) => handleChange("nbsLogin", e.target.value)}
                placeholder="Login para o sistema NBS"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nbsPassword">Primeira senha fixa</Label>
            <Input
              id="nbsPassword"
              type="text"
              value={formValues.nbsPassword}
              onChange={(e) => handleChange("nbsPassword", e.target.value)}
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
              value={formValues.holmesLogin}
              onChange={(e) => handleChange("holmesLogin", e.target.value)}
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
              value={formValues.intranetLogin}
              onChange={(e) => handleChange("intranetLogin", e.target.value)}
              placeholder="usuario@empresa.com ou 000.000.000-00"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="intranetPassword">Senha fixa</Label>
            <Input
              id="intranetPassword"
              type="text"
              value={formValues.intranetPassword}
              onChange={(e) => handleChange("intranetPassword", e.target.value)}
              placeholder="raviera2025"
              disabled
              className="bg-muted"
            />
            <p className="text-sm text-muted-foreground">Senha padrão: raviera2025</p>
          </div>
        </CardContent>
      </Card>

      {/* Botões */}
      <div className="flex justify-end gap-4">
        <Button type="button" variant="outline" onClick={handleClear}>
          Limpar
        </Button>
        <Button type="submit">
          Enviar E-mails
          
        </Button>
      </div>
    </form>
  );
}
