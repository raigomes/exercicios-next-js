"use client";

import { useRouter } from "next/navigation";
import React from "react";

export default function ButtonBack({ children }: React.PropsWithChildren) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return <button onClick={handleBack}>{children}</button>;
}
