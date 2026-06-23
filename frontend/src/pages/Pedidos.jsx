import { useEffect, useState } from "react";
import api from "../services/api";

export default function Pedidos() {
  const [pedidos, setPedidos] = useState([]);
  const [usuarioId, setUsuarioId] = useState("");

  async function carregarPedidos() {
    const response = await api.get("/pedidos");

    setPedidos(response.data);
  }

  async function criarPedido() {
    try {
      await api.post("/pedidos", {
        usuario_id: usuarioId
      });

      alert("Pedido criado!");

      setUsuarioId("");

      carregarPedidos();

    } catch (erro) {
      alert("Erro ao criar pedido");
    }
  }

  useEffect(() => {
    carregarPedidos();
  }, []);

  return (
    <div>
      <h1>Pedidos</h1>

      <input
        type="text"
        placeholder="ID do usuário"
        value={usuarioId}
        onChange={(e) => setUsuarioId(e.target.value)}
      />

      <br /><br />

      <button onClick={criarPedido}>
        Criar Pedido
      </button>

      <hr />

      <h2>Pedidos</h2>

      {pedidos.map((pedido) => (
        <div key={pedido.id}>
          <strong>ID:</strong> {pedido.id}
          <br />

          <strong>Usuário:</strong> {pedido.usuario_id}
          <br />

          <strong>Total:</strong> R$ {pedido.valor_total}
          <br />

          <strong>Status:</strong> {pedido.status}

          <hr />
        </div>
      ))}
    </div>
  );
}