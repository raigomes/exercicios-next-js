import Link from "next/link";

// components/menu.tsx
export default function Menu() {
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
    </ul>
  );
}
