import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h1 style={styles.titulo}>🍧 Açaí Story</h1>

      <p style={styles.subtitulo}>
        Monte seu açaí do seu jeito
      </p>

      <button
        style={styles.botao}
        onClick={() => navigate("/produtos")}
      >
        Montar Meu Açaí
      </button>

      <button
        style={styles.botao}
        onClick={() => navigate("/pedidos")}
      >
        Meus Pedidos
      </button>

      <button
        style={styles.sair}
        onClick={() => navigate("/login")}
      >
        Sair
      </button>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#240046",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    color: "white"
  },

  titulo: {
    fontSize: "50px"
  },

  subtitulo: {
    fontSize: "20px"
  },

  botao: {
    width: "250px",
    padding: "15px",
    background: "#9d4edd",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px"
  },

  sair: {
    marginTop: "30px",
    width: "250px",
    padding: "15px",
    background: "#ff4d6d",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontSize: "18px"
  }
};