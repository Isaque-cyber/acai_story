import { useEffect, useState } from "react";
import api from "../services/api";

export default function MeusPedidos() {

  const [pedidos, setPedidos] = useState([]);

  async function carregarPedidos() {

    try {

      const response = await api.get("/pedidos");

      setPedidos(response.data);

    } catch (erro) {

      console.error(erro);

      alert("Erro ao carregar pedidos");

    }

  }

  async function cancelarPedido(id) {

    const confirmar = window.confirm(
      "Deseja realmente cancelar este pedido?"
    );

    if (!confirmar) return;

    try {

      await api.delete(`/pedidos/${id}`);

      setPedidos(
        pedidos.filter(
          pedido => pedido.id !== id
        )
      );

      alert("Pedido cancelado com sucesso");

    } catch (erro) {

      console.error(erro);

      alert("Erro ao cancelar pedido");

    }

  }

  async function finalizarPedido(id) {

    try {

      await api.put(
        `/pedidos/${id}/finalizar`
      );

      carregarPedidos();

      alert("Pedido finalizado!");

    } catch (erro) {

      console.error(erro);

      alert("Erro ao finalizar pedido");

    }

  }

  useEffect(() => {

    carregarPedidos();

  }, []);

  return (

    <div
      style={{
        minHeight: "100vh",
        background: "#240046",
        color: "white",
        padding: "20px"
      }}
    >

      <h1
        style={{
          marginBottom: "20px"
        }}
      >
         Meus Pedidos
      </h1>

      {pedidos.length === 0 ? (

        <h3>Nenhum pedido encontrado</h3>

      ) : (

        pedidos.map((pedido) => (

          <div
            key={pedido.id}
            style={{
              background: "#4a148c",
              borderRadius: "15px",
              padding: "20px",
              marginBottom: "20px",
              position: "relative",
              boxShadow: "0 4px 10px rgba(0,0,0,0.3)"
            }}
          >

            <h2>
           {pedido.tamanho || "Açaí"}
            </h2>

            <p>
              <strong>Cliente:</strong>{" "}
              {pedido.nome}
            </p>

            <p>
              <strong>Calda:</strong>{" "}
              {pedido.calda || "Nenhuma"}
            </p>

            <p>
              <strong>Adicionais:</strong>
            </p>

            <ul>
              {pedido.adicionais ? (

                pedido.adicionais
                  .split(",")
                  .map((item, index) => (
                    <li key={index}>
                      {item.trim()}
                    </li>
                  ))

              ) : (

                <li>Nenhum adicional</li>

              )}
            </ul>

            <p>
              <strong>Total:</strong>{" "}
              R$ {pedido.valor_total}
            </p>

            <p>
              <strong>Status:</strong>{" "}
              {pedido.status}
            </p>

            <p>
              <strong>Data:</strong>{" "}
              {new Date(
                pedido.criado_em
              ).toLocaleString("pt-BR")}
            </p>

            <button
              onClick={() =>
                cancelarPedido(pedido.id)
              }
              style={{
                position: "absolute",
                right: "20px",
                top: "20px",
                background: "#ff4d4d",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Cancelar
            </button>

            <button
              onClick={() =>
                finalizarPedido(pedido.id)
              }
              style={{
                position: "absolute",
                right: "20px",
                top: "70px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                padding: "10px 20px",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold"
              }}
            >
              Finalizar
            </button>

          </div>

        ))

      )}

    </div>

  );

}