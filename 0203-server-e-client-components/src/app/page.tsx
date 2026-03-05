import dynamic from "next/dynamic";

export const Width = dynamic(() => import("@/components/width"), {
  ssr: false,
});

export default function Home() {
  return (
    <main>
      <h1>Home</h1>
      <Width />
    </main>
  );
}
