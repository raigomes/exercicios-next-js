import { getListCursos } from "@/api/cursos";
import Link from "next/link";
import React from "react";

export default async function ListaCursosPage() {
  const cursos = await getListCursos();

  return (
    <main>
      <h1 style={{ paddingLeft: "40px" }}>Cursos</h1>
      <ul className="cardList flex">
        {cursos.map((item) => (
          <li key={item.id} className="card">
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <p>{item.total_aulas} aulas</p>
            <p>{item.total_horas} horas</p>

            <Link href={`/cursos/${item.slug}`}>
              <button>Ver Aulas</button>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
