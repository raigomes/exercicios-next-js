import { Produto } from "@/types";
import React from "react";

export default async function ProdutosPage() {
  const response = await fetch("https://api.origamid.online/produtos");
  const data: Produto[] = response.ok ? await response.json() : null;

  if (!data) return null;

  return (
    <main>
      <ul className="cardList flex">
        {data.map((produto) => (
          <li key={produto.id} className="card">
            <h3>{produto.nome}</h3>
            <strong>
              {produto.preco.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}
            </strong>
            <p style={{ flex: 1, fontStyle: "italic" }}>{produto.descricao}</p>
            <span>Estoque: {produto.estoque}</span>
            <span>Importado: {produto.importado ? "Sim" : "Não"}</span>
          </li>
        ))}
      </ul>
    </main>
  );
}
