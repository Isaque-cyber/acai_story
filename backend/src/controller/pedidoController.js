import {
  listarPedidos,
  criarPedido
} from "../services/pedidoService.js";

async function listar(req, res) {
  try {
    const pedidos = await listarPedidos();

    res.json(pedidos);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao listar pedidos"
    });
  }
}

async function criar(req, res) {
  try {
    const { usuario_id } = req.body;

    const pedido = await criarPedido(usuario_id);

    res.status(201).json(pedido);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao criar pedido"
    });
  }
}

export {
  listar,
  criar
};