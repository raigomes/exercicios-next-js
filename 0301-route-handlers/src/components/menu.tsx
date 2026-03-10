import { cookies } from "next/headers";
import Link from "next/link";

// components/menu.tsx
export default async function Menu() {
  const token = cookies().get("token")?.value;
  const response = await fetch("https://api.origamid.online/conta/perfil", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const data = response.ok ? await response.json() : null;

  return (
    <ul className="menu">
      <li>
        <Link href={"/"}>Home</Link>
      </li>
      <li>
        <Link href={"/sobre"}>Sobre</Link>
      </li>
      <li>
        <Link href={"/imc"}>IMC</Link>
      </li>
      <li style={{ flex: 1, textAlign: "end" }}>
        {data && data.usuario ? (
          <strong>{data.usuario}</strong>
        ) : (
          <Link href={"/login"}>Login</Link>
        )}
      </li>
    </ul>
  );
}
