import React from "react";
import Contenu from "./Components/Contenu/Contenu";
import ToggleLangs from "./Components/toggleLangs/ToggleLangs";
import ContextProvider from "./context/langContext";
import './App.css';


function App() {
  return (
    <ContextProvider>
      <ToggleLangs />
      <Contenu />
    </ContextProvider>
  );
}

export default App;
