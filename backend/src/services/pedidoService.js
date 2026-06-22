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

export {
  listarPedidos,
  criarPedido
};