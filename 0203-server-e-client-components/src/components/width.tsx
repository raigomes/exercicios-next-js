"use client";
import React from "react";

export default function Width() {
  const [width, setWidth] = React.useState(
    document.documentElement.clientWidth,
  );

  React.useEffect(() => {
    function handleResize() {
      setWidth(document.documentElement.clientWidth);
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <p>Width: {width}</p>;
}
