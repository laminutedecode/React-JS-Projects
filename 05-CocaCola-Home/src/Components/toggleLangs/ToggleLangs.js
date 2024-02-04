import React, { useContext } from "react";
import FrenchFlag from "../../assets/france.svg";
import SpanishFlag from "../../assets/spain.svg";
import EnglishFlag from "../../assets/united-kingdom.svg";
import "./toggleLangs.css";
import { Context } from "../../context/langContext";

export default function ToggleLangs() {
  const { toggleLang } = useContext(Context);

  return (
    <div className="box-langs">
      <img onClick={() => toggleLang("FR")} src={FrenchFlag} />
      <img onClick={() => toggleLang("EN")} src={EnglishFlag} />
      <img onClick={() => toggleLang("ES")} src={SpanishFlag} />
    </div>
  );
}
