
# Projeto ONG

Projeto Integrador Extensionista II — Atividade 1.

## Tecnologias

- HTML
- CSS
- JavaScript
- Vite+
- Node.js
- Express

## Requisitos

- Node.js instalado
- npm instalado

## Como executar

### 1. Instalar dependências

```bash
npm install
```

### 2. Iniciar a API

Em um terminal, execute:

```bash
npm run api
```

A API ficará disponível na porta 3000.

### 3. Iniciar o site

Em outro terminal, execute:

```bash
npm run dev
```

Abra o endereço mostrado no terminal, normalmente http://localhost:5173/.

## Verificar a API

Acesse http://localhost:5173/api/health.

A resposta esperada é:

```json
{"status":"ok"}
```

## Teste de saúde da API

A rota `GET /api/health` verifica se a API está respondendo.

Resposta esperada:

```json
{
  "status": "ok"
}
```

O teste pode ser feito pelo endereço `http://localhost:5173/api/health` enquanto o site e a API estiverem em execução.
