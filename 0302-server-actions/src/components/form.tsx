"use client";

import login from "@/actions/login";
import React from "react";

export default function FormLogin() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const { isLogged } = await login(username, password);
      if (!isLogged) {
        throw new Error("Usuário não encontrado");
      }
      window.location.href = "/";
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro inesperado");
      }
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="username">Usuário:</label>
      <input
        type="text"
        name="username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        name="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button>Login</button>

      {error && <p>{error}</p>}
    </form>
  );
}
