import {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from "../services/produtoService.js";

async function listar(req, res) {
  try {
    const produtos = await listarProdutos();

    res.json(produtos);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao listar produtos"
    });
  }
}

async function buscarPorId(req, res) {
  try {
    const { id } = req.params;

    const produto = await buscarProdutoPorId(id);

    if (!produto) {
      return res.status(404).json({
        erro: "Produto não encontrado"
      });
    }

    res.json(produto);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao buscar produto"
    });
  }
}

async function criar(req, res) {
  try {
    const {
      nome,
      descricao,
      preco,
      estoque
    } = req.body;

    const produto = await criarProduto(
      nome,
      descricao,
      preco,
      estoque
    );

    res.status(201).json(produto);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao criar produto"
    });
  }
}

async function atualizar(req, res) {
  try {
    const { id } = req.params;

    const {
      nome,
      descricao,
      preco,
      estoque
    } = req.body;

    const produto = await atualizarProduto(
      id,
      nome,
      descricao,
      preco,
      estoque
    );

    if (!produto) {
      return res.status(404).json({
        erro: "Produto não encontrado"
      });
    }

    res.json(produto);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao atualizar produto"
    });
  }
}

async function remover(req, res) {
  try {
    const { id } = req.params;

    await deletarProduto(id);

    res.json({
      mensagem: "Produto removido com sucesso"
    });

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao remover produto"
    });
  }
}

export {
  listar,
  buscarPorId,
  criar,
  atualizar,
  remover
};