"use client";

import React from "react";

export default function IMCForm() {
  const [peso, setPeso] = React.useState<string | null>(null);
  const [altura, setAltura] = React.useState<string | null>(null);
  const [resultado, setResultado] = React.useState<string | null>(null);

  function handleSubmit(evt: React.FormEvent) {
    evt.preventDefault();
    if (peso && altura) {
      const pesoNumber = Number(peso);
      const alturaNumber = Number(altura) / 100;
      const total = (pesoNumber / (alturaNumber * alturaNumber)).toFixed(2);

      setResultado(total);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="peso">
        Peso (em kg)
        <input
          id="peso"
          name="peso"
          type="text"
          value={peso ?? ""}
          onChange={({ target }) => setPeso(target.value ?? "")}
        />
      </label>
      <label htmlFor="altura">
        Altura (em cm)
        <input
          id="altura"
          name="altura"
          type="text"
          value={altura ?? ""}
          onChange={({ target }) => setAltura(target.value ?? "")}
        />
      </label>
      <button>Calcular</button>
      {resultado && <p className="answer">IMC = {resultado}</p>}
    </form>
  );
}
