import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";


export default function Produtos() {
  const navigate = useNavigate();

  const [tamanho, setTamanho] = useState("");
  const [adicionais, setAdicionais] = useState([]);
  const [calda, setCalda] = useState("");

  const adicionaisOptions = [
    "Chocolate granulado",
    "Leite em pó premium",
    "Morango fresco",
    "Banana caramelizada",
    "Paçoca triturada",
    "Granola crocante"
  ];

  function toggle(item) {
    if (adicionais.includes(item)) {
      setAdicionais(adicionais.filter(a => a !== item));
    } else {
      if (adicionais.length >= 4) {
        alert("Máximo 4 adicionais");
        return;
      }

      setAdicionais([...adicionais, item]);
    }
  }

  async function finalizarPedido() {
    if (!tamanho) {
      alert("Selecione um tamanho");
      return;
      return;
    }

    try {
      const usuario_id = "9643a637-6fef-42c6-a709-adeb811ec51c";
      const produto_id = "e07120d5-f0bf-4372-8dbc-22135284cc8e";

      const pedidoResponse = await api.post(
        "/pedidos",
        {
          usuario_id,
          tamanho,
          calda,
          adicionais
        }
      );

      const pedido_id = pedidoResponse.data.id;

      await api.post("/pedidos/item", {
        pedido_id,
        produto_id,
        quantidade: 1,
        preco_unitario: 15.90
      });

      for (const adicional of adicionais) {
        await api.post("/pedidos/item", {
          pedido_id,
          produto_id,
          quantidade: 1,
          preco_unitario: 2.50
        });
      }

      alert("Pedido realizado com sucesso!");

    } catch (erro) {
      console.log(erro);
      alert("Erro ao finalizar pedido");
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.topo}>
        <h1> Monte seu Açaí</h1>

        <button
          style={styles.meusPedidos}
          onClick={() => navigate("/pedidos")}
        >
          Meus Pedidos
        </button>
      </div>

      {/* TAMANHO */}
      <h3>Tamanho</h3>

      <div style={styles.grid}>
        {["300ml", "500ml", "700ml"].map(item => (
          <div
            key={item}
            onClick={() => setTamanho(item)}
            style={{
              ...styles.card,
              border:
                tamanho === item
                  ? "3px solid green"
                  : "1px solid #ccc"
            }}
          >
            <input
              type="checkbox"
              checked={tamanho === item}
              readOnly
            />

            {item}
          </div>
        ))}
      </div>

      {/* ADICIONAIS */}
      <h3>Adicionais (máx. 4)</h3>

      <div style={styles.grid}>
        {adicionaisOptions.map(item => (
          <div
            key={item}
            onClick={() => toggle(item)}
            style={{
              ...styles.card,
              border:
                adicionais.includes(item)
                  ? "3px solid green"
                  : "1px solid #ccc"
            }}
          >
            <input
              type="checkbox"
              checked={adicionais.includes(item)}
              readOnly
            />

            {item}
          </div>
        ))}
      </div>

      {/* CALDAS */}
      <h3>Caldas</h3>

      <div style={styles.grid}>
        {[
          "Chocolate cremoso",
          "Morango artesanal",
          "Leite condensado premium",
          "Mel silvestre"
        ].map(item => (
          <div
            key={item}
            onClick={() => setCalda(item)}
            style={{
              ...styles.card,
              border:
                calda === item
                  ? "3px solid green"
                  : "1px solid #ccc"
            }}
          >
            <input
              type="checkbox"
              checked={calda === item}
              readOnly
            />

            {item}
          </div>
        ))}
      </div>

      <div style={styles.resumo}>
        <h3>Seu Pedido</h3>

        <p>
          <strong>Tamanho:</strong> {tamanho || "Nenhum"}
        </p>

        <p>
          <strong>Calda:</strong> {calda || "Nenhuma"}
        </p>

        <p>
          <strong>Adicionais:</strong>
        </p>

        <ul>
          {adicionais.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <button
        style={styles.btn}
        onClick={finalizarPedido}
      >
        Finalizar Pedido
      </button>

      <button
        style={styles.logout}
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
    color: "white",
    padding: "20px"
  },

  topo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
  },

  meusPedidos: {
    background: "#9d4edd",
    border: "none",
    color: "white",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer"
  },

  select: {
    width: "300px",
    padding: "10px",
    borderRadius: "10px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2,1fr)",
    gap: "10px"
  },

  card: {
    background: "white",
    color: "black",
    padding: "15px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },

  resumo: {
    marginTop: "20px",
    background: "#3c096c",
    padding: "20px",
    borderRadius: "10px"
  },

 btn: {
  position: "fixed",

  left: "50%",
  transform: "translateX(-50%)",

  bottom: "20px",

  background: "#9d4edd",
  color: "white",

  border: "none",

  padding: "15px",

  borderRadius: "10px",

  cursor: "pointer",

  zIndex: 999
},

  logout: {
    position: "fixed",
    bottom: "20px",
    left: "20px",
    background: "#ff4d6d",
    color: "white",
    border: "none",
    padding: "15px",
    borderRadius: "10px",
    cursor: "pointer"
  }
};