const favoritos = require('../data/favoritos');

function listarFavoritos(req, res) {
  return res.json(favoritos);
}

function adicionarFavorito(req, res) {
  const { id, nome, imagem } = req.body || {};

  if (!id || !nome) {
    return res.status(400).json({ mensagem: 'Informe o ID e o nome da receita.' });
  }

  const idTexto = String(id);
  const existe = favoritos.some(receita => receita.id === idTexto);

  if (existe) {
    return res.status(409).json({ mensagem: 'Receita já está nos favoritos.' });
  }

  const favorito = {
    id: idTexto,
    nome: String(nome),
    imagem: imagem ? String(imagem) : null
  };

  favoritos.push(favorito);
  return res.status(201).json({
    mensagem: 'Receita adicionada aos favoritos!',
    favorito,
    favoritos
  });
}

function removerFavorito(req, res) {
  const id = String(req.params.id);
  const indice = favoritos.findIndex(receita => receita.id === id);

  if (indice === -1) {
    return res.status(404).json({ mensagem: 'Favorito não encontrado.' });
  }

  favoritos.splice(indice, 1);
  return res.json({ mensagem: 'Receita removida dos favoritos!', favoritos });
}

module.exports = { listarFavoritos, adicionarFavorito, removerFavorito };
