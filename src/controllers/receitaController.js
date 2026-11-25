const receitaService = require('../services/receitaService');

async function listarReceitas(req, res) {
  try {
    const nome = String(req.query.nome || '').trim();

    if (!nome) {
      return res.status(400).json({ mensagem: 'Informe o nome da receita no parâmetro nome.' });
    }

    const receitas = await receitaService.buscarReceitas(nome);
    return res.json(receitas);
  } catch (erro) {
    console.error('Erro ao buscar receitas:', erro.message);
    return res.status(502).json({ mensagem: 'Não foi possível consultar a API de receitas.' });
  }
}

async function detalharReceita(req, res) {
  try {
    const { id } = req.params;
    const receita = await receitaService.buscarReceitaPorId(id);

    if (!receita) {
      return res.status(404).json({ mensagem: 'Receita não encontrada.' });
    }

    return res.json(receita);
  } catch (erro) {
    console.error('Erro ao consultar receita:', erro.message);
    return res.status(502).json({ mensagem: 'Não foi possível consultar os detalhes da receita.' });
  }
}

module.exports = { listarReceitas, detalharReceita };
