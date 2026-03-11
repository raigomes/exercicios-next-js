"use client";

import login from "@/actions/login";
import React from "react";

export default function FormLogin() {
  const [error, setError] = React.useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const { username, password } = Object.fromEntries(formData);

    try {
      const { isLogged } = await login(username as string, password as string);
      if (!isLogged) throw new Error("Usuário não encontrado");
      window.location.href = "/";
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Usuário:</label>
      <input type="text" name="username" id="username" />

      <label htmlFor="password">Senha:</label>
      <input type="password" name="password" id="password" />

      <button>Login</button>

      {error && <p>{error}</p>}
    </form>
  );
}
