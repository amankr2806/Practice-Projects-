"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

type randomColorFunction = (length: number) => number;
type hextype = number | "A" | "B" | "C" | "D" | "E" | "F";

const RandomColor = () => {
  const router = useRouter();

  const [color, setColor] = useState<string>("#ffffff");

  const handleHome = () => {
    router.push("/");
  };

  const randomColor: randomColorFunction = (length) => {
    return Math.floor(Math.random() * length);
  };

  const handleColor = () => {
    const hex: hextype[] = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColor(hex.length)];
    }
    setColor(hexColor);
  };

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={handleHome}>Home</button>
      <button onClick={handleColor}>Change color</button>
    </div>
  );
};

export default RandomColor;
