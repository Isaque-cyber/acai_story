const prisma = require("../lib/prisma");

async function listar(req, res) {
  try {
    const produtos = await prisma.produto.findMany();

    return res.json(produtos);
  } catch (error) {
    return res.status(500).json({
      erro: error.message
    });
  }
}

async function criar(req, res) {
  try {
    const { nome, preco, estoque } = req.body;

    const produto = await prisma.produto.create({
      data: {
        nome,
        preco,
        estoque
      }
    });

    return res.status(201).json(produto);

  } catch (error) {
    return res.status(500).json({
      erro: error.message
    });
  }
}

module.exports = {
  listar,
  criar
};