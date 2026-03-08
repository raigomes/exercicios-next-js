import { getCurso } from "@/api/cursos";
import Link from "next/link";
import React from "react";

interface CursoProps {
  slug: string;
}

export default async function Curso({ slug }: CursoProps) {
  const curso = await getCurso(slug);
  return (
    <div>
      <h1>{curso.nome}</h1>
      <p>ID: {curso.id}</p>
      <p>{curso.descricao}</p>
      <p>{`${curso.total_aulas} aulas - ${curso.total_horas} horas`}</p>

      <h3>Aulas</h3>
      <ul>
        {curso.aulas.map((aula) => (
          <li key={aula.id}>
            <h4>{`${aula.ordem} - ${aula.nome}`}</h4>
            <p>{aula.descricao}</p>
            <p>Tempo de aula: {aula.tempo} min</p>
            <button>
              <Link href={`${curso.slug}/${aula.slug}`}>Ver aula</Link>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
