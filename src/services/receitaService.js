const api = require('../config/api');

async function buscarReceitas(nome) {
  const resposta = await api.get('/search.php', { params: { s: nome } });
  return resposta.data.meals || [];
}

async function buscarReceitaPorId(id) {
  const resposta = await api.get('/lookup.php', { params: { i: id } });
  return resposta.data.meals?.[0] || null;
}

module.exports = { buscarReceitas, buscarReceitaPorId };
