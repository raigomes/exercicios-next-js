"use server";

import { Produto } from "@/types";
import { revalidatePath } from "next/cache";

export default async function postProduct(produto: Produto) {
  try {
    const response = await fetch("https://api.origamid.online/produtos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(produto),
    });

    if (!response.ok) throw new Error("Erro interno");

    revalidatePath("/produtos");
    return { success: true };
  } catch (e) {
    console.error(e);
    return { success: false, error: String(e) };
  }
}
