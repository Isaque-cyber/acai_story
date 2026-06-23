import { useEffect, useState } from "react";
import api from "../services/api";

export default function Usuarios() {
  const [usuarios, setUsuarios] = useState([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function carregarUsuarios() {
    const response = await api.get("/usuarios");
    setUsuarios(response.data);
  }

  async function cadastrarUsuario() {
    try {
      await api.post("/usuarios", {
        nome,
        email,
        senha
      });

      alert("Usuário cadastrado!");

      setNome("");
      setEmail("");
      setSenha("");

      carregarUsuarios();

    } catch (erro) {
      alert("Erro ao cadastrar usuário");
    }
  }

  useEffect(() => {
    carregarUsuarios();
  }, []);

  return (
    <div>
      <h1>Usuários</h1>

      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />

      <br /><br />

      <button onClick={cadastrarUsuario}>
        Cadastrar
      </button>

      <hr />

      <h2>Usuários cadastrados</h2>

      {usuarios.map((usuario) => (
        <div key={usuario.id}>
          <strong>{usuario.nome}</strong>
          <br />
          {usuario.email}
          <hr />
        </div>
      ))}
    </div>
  );
}