"use client";

import getCookie from "@/actions/cookie";
import React from "react";

export default function ButtonToken() {
  const [token, setToken] = React.useState("");

  const handleClick = async () => {
    const token = await getCookie("token");
    token && setToken(token);
  };

  return (
    <div>
      <button onClick={handleClick}>Token</button>
      {token && <p>Cookie: {token}</p>}
    </div>
  );
}
