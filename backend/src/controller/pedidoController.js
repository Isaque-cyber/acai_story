import {
  listarPedidos,
  criarPedido,
  adicionarItemPedido,
  buscarPedidoPorId
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

async function adicionarItem(req, res) {
  try {
    const {
      pedido_id,
      produto_id,
      quantidade,
      preco_unitario
    } = req.body;

    const item = await adicionarItemPedido(
      pedido_id,
      produto_id,
      quantidade,
      preco_unitario
    );

    res.status(201).json(item);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao adicionar item ao pedido"
    });
  }
}

async function buscarPorId(req, res) {
  try {
    const { id } = req.params;

    const pedido = await buscarPedidoPorId(id);

    res.json(pedido);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao buscar pedido"
    });
  }
}

export {
  listar,
  criar,
  adicionarItem,
  buscarPorId
};