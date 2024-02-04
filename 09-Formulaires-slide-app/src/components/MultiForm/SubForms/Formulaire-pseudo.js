import React from 'react'
import './Form.css'

export default function Form2(props) {



  const preventDef = e => e.preventDef;


const retourForm = () => {
  props.modifIndex(2);
};
  return (
    <div className="card">
      <form onSubmit={preventDef}>
        <h1>Tout héro a un nom</h1>
        <div className="group-inp">
          <label htmlFor="password">Choisisser un pseudo</label>
          <input id="password" type="text" />
        </div>

        <div className="btns">
          <button type="button" onClick={retourForm}>
            RETOUR
          </button>
          <button onClick={() => props.modifIndex(4)}>SUIVANT</button>
        </div>
      </form>
    </div>
  );
}
