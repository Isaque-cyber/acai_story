import { useState } from "react";

export default function Complementos() {

  const [complemento, setComplemento] =
    useState("");

  return (
    <div>

      <h1>Complementos</h1>

      <select
        value={complemento}
        onChange={(e) =>
          setComplemento(e.target.value)
        }
      >
        <option>
          Selecione
        </option>

        <option>
          Leite em Pó
        </option>

        <option>
          Granola
        </option>

        <option>
          Sucrilhos
        </option>

        <option>
          Nutella
        </option>

        <option>
          Paçoca
        </option>

      </select>

      <h3>
        Selecionado:
        {complemento}
      </h3>

    </div>
  );
}