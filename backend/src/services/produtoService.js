import pool from "../config/db.js";

async function listarProdutos() {
  const resultado = await pool.query(
    "SELECT * FROM produtos ORDER BY criado_em DESC"
  );

  return resultado.rows;
}

async function buscarProdutoPorId(id) {
  const resultado = await pool.query(
    "SELECT * FROM produtos WHERE id = $1",
    [id]
  );

  return resultado.rows[0];
}

async function criarProduto(nome, descricao, preco, estoque) {
  const resultado = await pool.query(
    `
    INSERT INTO produtos
    (nome, descricao, preco, estoque)
    VALUES ($1, $2, $3, $4)
    RETURNING *
    `,
    [nome, descricao, preco, estoque]
  );

  return resultado.rows[0];
}

async function atualizarProduto(
  id,
  nome,
  descricao,
  preco,
  estoque
) {
  const resultado = await pool.query(
    `
    UPDATE produtos
    SET nome = $2,
        descricao = $3,
        preco = $4,
        estoque = $5
    WHERE id = $1
    RETURNING *
    `,
    [id, nome, descricao, preco, estoque]
  );

  return resultado.rows[0];
}

async function deletarProduto(id) {
  await pool.query(
    "DELETE FROM produtos WHERE id = $1",
    [id]
  );
}

export {
  listarProdutos,
  buscarProdutoPorId,
  criarProduto,
  atualizarProduto,
  deletarProduto
};