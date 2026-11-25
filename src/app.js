const express = require('express');
const cors = require('cors');

const receitaRoutes = require('./routes/receitaRoutes');
const favoritoRoutes = require('./routes/favoritoRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ mensagem: 'Bem-vindo à API FoodUMJ!' });
});

app.use('/api/receitas', receitaRoutes);
app.use('/api/favoritos', favoritoRoutes);

module.exports = app;
