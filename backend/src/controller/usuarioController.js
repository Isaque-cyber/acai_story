import {
  listarUsuarios,
  criarUsuario
} from "../services/usuarioService.js";  

async function listar(req, res) {
    try{
        const usuarios = await listarUsuarios();

        res.json(usuarios);
    }  catch (erro) {
        console.error(erro);
  
        res.status(500).json({
            erro: "Ero ao listar usuários",
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

    res.status(500).json({
      erro: "Erro ao criar usuário"
    });
  }
}

export {
    listar,
     criar
    };