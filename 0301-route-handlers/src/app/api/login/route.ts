import { cookies } from "next/headers";

export async function POST(request: Request) {
  const { username, password } = await request.json();
  const response = await fetch("https://api.origamid.online/conta/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  if (!response.ok)
    return Response.json({
      method: "POST",
      ok: false,
      isLogged: false,
    });

  const { token } = await response.json();
  cookies().set("token", token, {
    secure: true,
    httpOnly: true,
  });

  return Response.json({
    method: "POST",
    ok: true,
    isLogged: true,
  });
}
