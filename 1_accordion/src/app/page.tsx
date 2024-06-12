"use client";
import Items from "@/components/Items";
import MultiSelection from "@/components/MultiSelection";
import { useState } from "react";

export default function Home() {
  const [multiSelectOn, setMultiSelectionOn] = useState<boolean>(false);

  return (
    <div className="wrapper">
      <MultiSelection
        multiSelectOn={multiSelectOn}
        setMultiSelectionOn={setMultiSelectionOn}
      ></MultiSelection>
      <Items multiSelectOn={multiSelectOn}></Items>
    </div>
  );
}
