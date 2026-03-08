import { getAula } from "@/api/cursos";
import React from "react";
import ButtonBack from "./ButtonBack";

interface AulaProps {
  slug: string;
}

export default async function Aula({ slug }: AulaProps) {
  const aula = await getAula(slug);

  return (
    <div>
      <h1>Aula: {aula.nome}</h1>
      <p>ID: {aula.id}</p>
      <p>{aula.descricao}</p>
      <p>ID Curso: {aula.curso_id}</p>
      <p>Tempo de aula: {aula.tempo} min</p>
      <ButtonBack>Voltar</ButtonBack>
    </div>
  );
}
