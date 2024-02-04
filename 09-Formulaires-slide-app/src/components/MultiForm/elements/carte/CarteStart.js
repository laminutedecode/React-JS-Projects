import React from 'react'
import './carte.css'

export default function CarteStart(props) {
  return (
    <div className="card">
      <h1>🚀REJOINDRE NOTRE GALAXIE 👩‍💻 </h1>
      <div className="btns">
        <button onClick={() => props.modifIndex(2)}>
          Commencer l'inscription
        </button>
      </div>
    </div>
  );
}
