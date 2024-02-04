import React from 'react'
import './Form.css'

export default function Form2(props) {



  const preventDef = e => e.preventDef;


const retourForm = () => {
  props.modifIndex(3);
};
  return (
    <div className="card">
      <form onSubmit={preventDef}>
        <h1>🔑 SÉCURITÉ</h1>
        <div className="group-inp">
          <label htmlFor="password">Choisisser un mot de passe</label>
          <input id="password" type="text" />
        </div>
        <div className="group-inp">
          <label htmlFor="passwordConfirm">Comfirmez votre mot de passe</label>
          <input id="passwordConfirm" type="text" />
        </div>

        <div className="btns">
          <button type="button" onClick={retourForm}>
            RETOUR
          </button>
          <button onClick={() => props.modifIndex(5)}>SUIVANT</button>
        </div>
      </form>
    </div>
  );
}
