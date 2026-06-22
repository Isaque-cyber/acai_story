import pool from "../config/db.js";

async function listarPedidos() {
  const resultado = await pool.query(
    `
    SELECT *
    FROM pedidos
    ORDER BY criado_em DESC
    `
  );

  return resultado.rows;
}

async function criarPedido(usuario_id) {
  const resultado = await pool.query(
    `
    INSERT INTO pedidos (usuario_id)
    VALUES ($1)
    RETURNING *
    `,
    [usuario_id]
  );

  return resultado.rows[0];
}

async function adicionarItemPedido(
  pedido_id,
  produto_id,
  quantidade,
  preco_unitario
) {
  const resultado = await pool.query(
    `
    INSERT INTO pedido_itens
    (
      pedido_id,
      produto_id,
      quantidade,
      preco_unitario
    )
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [
      pedido_id,
      produto_id,
      quantidade,
      preco_unitario
    ]
  );

  const subtotal = quantidade * preco_unitario;

  await pool.query(
    `
    UPDATE pedidos
    SET valor_total = valor_total + $1
    WHERE id = $2
    `,
    [subtotal, pedido_id]
  );

  return resultado.rows[0];
}

async function buscarPedidoPorId(id) {
  const resultado = await pool.query(
    `
    SELECT
      p.id AS pedido_id,
      p.valor_total,
      p.status,
      p.criado_em,

      pr.nome AS produto,
      pi.quantidade,
      pi.preco_unitario

    FROM pedidos p

    LEFT JOIN pedido_itens pi
      ON p.id = pi.pedido_id

    LEFT JOIN produtos pr
      ON pi.produto_id = pr.id

    WHERE p.id = $1
    `,
    [id]
  );

  return resultado.rows;
}

export {
  listarPedidos,
  criarPedido,
  adicionarItemPedido,
  buscarPedidoPorId
};