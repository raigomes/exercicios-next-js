"use client";

import postProduct from "@/actions/product";
import { Produto } from "@/types";
import { useRouter } from "next/navigation";
import React from "react";

export default function ProdutoForm() {
  const router = useRouter();

  async function handleSubmit(evt: React.FormEvent<HTMLFormElement>) {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);
    const produto: Produto = {
      nome: String(formData.get("name") ?? ""),
      preco: Number(formData.get("price")) || 0,
      descricao: String(formData.get("description") ?? ""),
      estoque: Number(formData.get("quantity")) || 0,
      importado: formData.get("imported") === "on" ? 1 : 0,
    };

    const result = await postProduct(produto);
    if (result?.success) router.push("/produtos");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome do Produto:</label>
      <input type="text" name="name" id="name" />

      <label htmlFor="price">Preço:</label>
      <input type="number" name="price" id="price" />

      <label htmlFor="description">Descrição:</label>
      <input type="text" name="description" id="description" />

      <label htmlFor="quantity">Estoque:</label>
      <input type="number" name="quantity" id="quantity" />

      <label htmlFor="imported">
        <input type="checkbox" name="imported" id="imported" />
        Importado
      </label>

      <button>Cadastrar</button>
    </form>
  );
}
