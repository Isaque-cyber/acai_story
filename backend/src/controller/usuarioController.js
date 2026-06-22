import {
  listarUsuarios,
  criarUsuario,
  loginUsuario
} from "../services/usuarioService.js";

async function listar(req, res) {
  try {
    const usuarios = await listarUsuarios();

    res.json(usuarios);

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao listar usuários"
    });
  }
}

async function criar(req, res) {
  try {
    const { nome, email, senha } = req.body;

    const usuario = await criarUsuario(
      nome,
      email,
      senha
    );

    res.status(201).json(usuario);

  } catch (erro) {
    console.error(erro);

    if (erro.message === "Email já cadastrado") {
      return res.status(400).json({
        erro: erro.message
      });
    }

    res.status(500).json({
      erro: "Erro ao criar usuário"
    });
  }
}

async function login(req, res) {
  try {
    const { email, senha } = req.body;

    const usuario = await loginUsuario(
      email,
      senha
    );

    if (!usuario) {
      return res.status(401).json({
        erro: "Email ou senha inválidos"
      });
    }

    res.json({
      sucesso: true,
      usuario
    });

  } catch (erro) {
    console.error(erro);

    res.status(500).json({
      erro: "Erro ao realizar login"
    });
  }
}

export {
  listar,
  criar,
  login
};