import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

export default function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  async function cadastrar() {
    try {
      await api.post("/usuarios", {
        nome,
        email,
        senha
      });

      alert("Cadastro realizado!");
      navigate("/login");

    } catch (err) {
      alert("Erro ao cadastrar");
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>🍧 Açaí Story</h1>
        <p style={styles.subtitle}>Crie sua conta</p>

        <input
          style={styles.input}
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          style={styles.input}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={styles.input}
          type="password"
          placeholder="Senha"
          onChange={(e) => setSenha(e.target.value)}
        />

        <button style={styles.button} onClick={cadastrar}>
          Cadastrar
        </button>

        <p style={styles.link} onClick={() => navigate("/login")}>
          Já tem conta? Entrar
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg,#240046,#5a189a)"
  },

  card: {
    width: "340px",
    padding: "35px",
    borderRadius: "15px",
    background: "#1b0033",
    boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
    color: "white",
    textAlign: "center",

    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },

  title: {
    marginBottom: "5px"
  },

  subtitle: {
    marginBottom: "20px",
    opacity: 0.7
  },

  input: {
    width: "90%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "8px",
    border: "none",
    outline: "none",
    textAlign: "center"
  },

  button: {
    width: "90%",
    padding: "12px",
    marginTop: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#9d4edd",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer"
  },

  link: {
    marginTop: "10px",
    fontSize: "12px",
    cursor: "pointer",
    opacity: 0.8
  }
};