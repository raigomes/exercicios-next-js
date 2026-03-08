import { getAula } from "@/api/cursos";
import ButtonBack from "@/components/ButtonBack";
import React from "react";

interface AulaProps {
  params: {
    curso: string;
    aula: string;
  };
}

export default async function AulaPage({ params }: AulaProps) {
  const slug = `${params.curso}/${params.aula}`;
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
