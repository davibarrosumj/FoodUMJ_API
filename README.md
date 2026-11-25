# FoodUMJ: Receitas — API Backend

Backend em Node.js e Express para pesquisar receitas na TheMealDB, consultar detalhes e gerenciar favoritos.

## Requisitos
- Node.js 18 ou superior
- npm

## Instalação
No terminal, dentro da pasta do projeto:

```bash
npm install
```

## Executar
Modo desenvolvimento:

```bash
npm run dev
```

Modo normal:

```bash
npm start
```

O servidor inicia em `http://localhost:3000`.

## Endpoints

| Método | Endpoint | Descrição |
|---|---|---|
| GET | `/` | Verifica se a API está funcionando |
| GET | `/api/receitas?nome=chicken` | Pesquisa receitas pelo nome |
| GET | `/api/receitas/52772` | Consulta detalhes de uma receita |
| GET | `/api/favoritos` | Lista favoritos |
| POST | `/api/favoritos` | Adiciona uma receita aos favoritos |
| DELETE | `/api/favoritos/52772` | Remove um favorito |

### Exemplo de inclusão de favorito

Requisição `POST /api/favoritos`, com corpo JSON:

```json
{
  "id": "52772",
  "nome": "Teriyaki Chicken Casserole",
  "imagem": "https://www.themealdb.com/images/media/meals/wvpsxx1468256321.jpg"
}
```

## Observações
- A API externa utilizada é a TheMealDB, configurada no arquivo `.env`.
- O arquivo `src/data/favoritos.js` mantém favoritos apenas em memória. Eles serão apagados quando o servidor for reiniciado.
- Para uso real com múltiplos usuários, recomenda-se persistir os favoritos em um banco de dados e associá-los a cada usuário.
