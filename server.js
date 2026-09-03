import express from 'express';
import cors from 'cors';

const app = express();

// Habilita o CORS para permitir que o front-end acesse a API
app.use(cors());

// Rota de consulta de data e hora
app.get('/api/datetime', (req, res) => {
  res.json({
    date: new Date().toLocaleDateString('pt-BR'),
    time: new Date().toLocaleTimeString('pt-BR'),
    fullString: new Date().toLocaleString('pt-BR'),
    status: 'API REST com Express funcionando com sucesso!'
  });
});

// Porta dinâmica exigida por plataformas de nuvem como o Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});