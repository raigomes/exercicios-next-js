import Aula from "@/components/Aula";
import Curso from "@/components/Curso";
import React from "react";

interface CursoProps {
  params: {
    slug: string[];
  };
}

export default async function CursoPage({ params }: CursoProps) {
  const slug = params.slug.join("/");
  const isCurso = params.slug.length === 1;

  return <main>{isCurso ? <Curso slug={slug} /> : <Aula slug={slug} />}</main>;
}
