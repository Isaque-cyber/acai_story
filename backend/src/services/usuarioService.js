import pool from "../config/db.js";

async function listarUsuarios() {
  const resultado = await pool.query(
    "SELECT id, nome, email, criado_em FROM usuarios"
  );

  return resultado.rows;
}

async function criarUsuario(nome, email, senha) {

  const usuarioExistente = await pool.query(
    "SELECT id FROM usuarios WHERE email = $1",
    [email]
  );

  if (usuarioExistente.rows.length > 0) {
    throw new Error("Email já cadastrado");
  }

  const resultado = await pool.query(
    `
    INSERT INTO usuarios (nome, email, senha)
    VALUES ($1, $2, $3)
    RETURNING id, nome, email, criado_em
    `,
    [nome, email, senha]
  );

  return resultado.rows[0];
}

async function loginUsuario(email, senha) {
  const resultado = await pool.query(
    `
    SELECT id, nome, email
    FROM usuarios
    WHERE email = $1
      AND senha = $2
    `,
    [email, senha]
  );

  return resultado.rows[0];
}

export {
  listarUsuarios,
  criarUsuario,
  loginUsuario
};