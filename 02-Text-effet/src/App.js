import React from 'react';
import "../src/App.css"
import { Typewriter , Cursor } from "react-simple-typewriter";

function App(){
  

  return (
    <h1>
      Bienvenue    
      <span>
        <Typewriter words={["Developpeur", "Graphiste", "Designer"]} 
        loop={7} />
      </span>
      <span>
        <Cursor />
      </span>
    </h1>
  );
}

export default App;
