const CURSOS_URL = "https://api.origamid.online/cursos";

type CursoInfo = {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  total_aulas: number;
  total_horas: number;
};

export type ICurso = CursoInfo & {
  aulas: IAula[];
};

export interface IAula {
  id: number;
  slug: string;
  nome: string;
  descricao: string;
  curso_id: number;
  tempo: number;
  ordem: number;
}

async function fetchCursos<T>(url: string, init?: RequestInit): Promise<T> {
  const response = await fetch(url, init);

  if (!response.ok) throw new Error(`Erro: ${response.status} - ${url}`);

  return await response.json();
}

export async function getListCursos() {
  return await fetchCursos<CursoInfo[]>(CURSOS_URL);
}

export async function getCurso(slug: string) {
  return await fetchCursos<ICurso>(`${CURSOS_URL}/${slug}`);
}

export async function getAula(slug: string) {
  return await fetchCursos<IAula>(`${CURSOS_URL}/${slug}`);
}
