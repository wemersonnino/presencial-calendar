# presencial-calendar
 Projeto Next.js com TypeScript, Tailwind CSS, NextAuth e Firebase, usando o calendário do Tailwind Month View para gerenciar o trabalho híbrido

# 🔐 Fluxo de Login e Autenticação com Firebase + NextAuth + Arquitetura Hexagonal

Este documento descreve o fluxo completo de login usando:

- **Firebase Auth + Firestore**
- **NextAuth.js com Credentials Provider**
- **Arquitetura Hexagonal (Ports & Adapters)**
- **Validação com Zod**
- **Server Actions (Next.js App Router)**

---

## 📚 Sumário

- [📁 Estrutura de Diretórios](#-estrutura-de-diretórios)
- [🔁 Diagrama do Fluxo](#-diagrama-do-fluxo)
- [🧠 Etapas Explicadas](#-etapas-explicadas)
- [✅ Vantagens da Arquitetura](#-vantagens-da-arquitetura)
- [💡 Possíveis Extensões](#-possíveis-extensões)

---

## 📁 Estrutura de Diretórios

```bash
/src
├── app/
│   └── api/auth/[...nextauth]/route.ts        # Rota NextAuth
├── components/
│   └── login/LoginForm.tsx                    # Formulário de login (Client)
├── core/
│   └── application/
│       ├── ports/AuthPort.ts                  # Interface para autenticação
│       └── services/Auth.service.ts           # Serviço de domínio
│   └── infrastructure/
│       └── adapters/Firebase.adapter.ts       # Implementação com Firebase
├── interfaces/
│   └── actions/auth/authenticate.action.ts    # Server Action
├── lib/
│   └── authOptions.ts                         # Configuração NextAuth
│   └── firebase.ts                            # Inicialização do Firebase
├── schemas/
│   └── auth.schema.ts                         # Validação com Zod
```

```bash
## 🔁 Diagrama do Fluxo

![Diagrama do Fluxo de Autenticação](https://raw.githubusercontent.com/your-repo/your-project/main/docs/auth-flow-diagram.png)
[LoginForm.tsx]
 ↓ (submit com e-mail/senha)
[authenticate.action.ts]
 ↓
[AuthService.login()]
 ↓
[FirebaseAdapter.login()]
 ↓
[Firebase Auth + Firestore]
 ↑
Retorna usuário
 ↓
signIn('credentials') → NextAuth
 ↓
[authOptions.ts] → AuthService.login()
 ↓
Retorna sessão JWT
```

```bash
## 🧠 Etapas Explicadas
1. **LoginForm.tsx**: Componente React que coleta e-mail e senha do usuário.
    - Ao submeter, chama a `authenticate` action.
2. **authenticate.action.ts**: Server Action que recebe os dados do formulário.
    - Valida os dados com Zod.
    - Chama o serviço de autenticação.
3. **AuthService.login()**: Serviço de domínio que encapsula a lógica de autenticação.
    - Chama o adaptador de infraestrutura.
4. **FirebaseAdapter.login()**: Implementação específica que interage com Firebase Auth.
    - Realiza a autenticação e retorna o usuário.
5. **NextAuth**: Integração com NextAuth.js usando o `CredentialsProvider`.
    - Configurado em `authOptions.ts`.
6. **authOptions.ts**: Configuração do NextAuth que define o provedor de credenciais.
    - Define callbacks para manipular a sessão e o token JWT.
7. **Firebase Auth + Firestore**: Firebase gerencia a autenticação e armazena os dados do usuário.
8. **Retorno da Sessão**: Após a autenticação, o NextAuth retorna a sessão JWT para o cliente.
```

```bash
## ✅ Vantagens da Arquitetura
- **Separação de Preocupações**: Lógica de autenticação isolada da interface e infraestrutura.
- **Testabilidade**: Serviços e adaptadores podem ser facilmente testados isoladamente.
- **Flexibilidade**: Fácil de trocar a implementação de autenticação (ex: de Firebase para Auth0) sem impactar o restante do código.
- **Validação Centralizada**: Uso de Zod para validação de dados, garantindo consistência e segurança.
- **Server Actions**: Permite lógica de servidor diretamente no componente, mantendo a simplicidade e eficiência.
```

```bash
## 💡 Possíveis Extensões
- **Suporte a OAuth**: Adicionar provedores como Google, GitHub, etc.
- **Recuperação de Senha**: Implementar fluxo de recuperação de senha usando Firebase.
- **Gerenciamento de Sessões**: Adicionar funcionalidades para logout e verificação de sessão.
- **Notificações**: Enviar e-mails de confirmação ou notificações de login.
- **Auditoria de Segurança**: Registrar tentativas de login e ações do usuário para monitoramento.
- **Testes Automatizados**: Implementar testes unitários e de integração para garantir a robustez do fluxo de autenticação.
```
- **UI/UX Melhorado**: Melhorar a experiência do usuário com feedback visual e mensagens de erro mais claras.
- **Gerenciamento de Estado**: Integrar com uma biblioteca de gerenciamento de estado (ex: Zustand, Redux) para gerenciar o estado do usuário autenticado.
```
- **Internacionalização**: Adicionar suporte a múltiplos idiomas para o fluxo de autenticação.
- **Documentação**: Melhorar a documentação do código e do fluxo de autenticação para facilitar a manutenção e o onboarding de novos desenvolvedores.
```
- **Monitoramento e Logs**: Implementar monitoramento de erros e logs para rastrear problemas de autenticação em produção.
- **Performance**: Otimizar o fluxo de autenticação para reduzir latência e melhorar a experiência do usuário.
- **Acessibilidade**: Garantir que o fluxo de autenticação seja acessível para todos os usuários, incluindo aqueles com deficiências.
``` 