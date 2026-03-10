"use client";

import React from "react";

export default function FormLogin() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((response) => response.json())
      .then((data: { isLogged: boolean }) =>
        data.isLogged
          ? (window.location.href = "/")
          : setError("Usuário não encontrado"),
      )
      .catch((err: unknown) => setError(JSON.stringify(err)));
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
