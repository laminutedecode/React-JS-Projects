import React, {useState} from 'react'
import './Form.css'

export default function Form1(props) {


  const preventDef = e => e.preventDef;
   const [dataInputs, setDataInputs] = useState({
     valeurs: {
      nom: "",
      prenom: "",
      age: "",
      mail:""
     }
   });

    const handleRadio = (e) => {
      setDataInputs({
        dietForm: e.target.value,
      });
          props.modifyIndex(3, dataInputs);
    };



  return (
    <div className="card">
      <form onSubmit={preventDef}>
        <h1>🤵 Infos sur vous</h1>
        <div className="group-inp">
          <label htmlFor="name">Votre nom</label>
          <input 
          onChange={handleRadio}
          id="name" type="text" />
        </div>
        <div className="group-inp">
          <label htmlFor="firstName">Votre Prenom</label>
          <input 
          onChange={handleRadio}
          id="firstName" type="text" />
        </div>
        <div className="group-inp">
          <label htmlFor="age">Votre âge</label>
          <input 
          onChange={handleRadio}
          id="age" type="number" />
        </div>
        <div className="group-inp">
          <label htmlFor="mail">Votre mail</label>
          <input 
          onChange={handleRadio}
          id="mail" type="mail" />
        </div>
        <div className="btns">
          <button type="button" onClick={() => props.modifIndex(1)}>
            RETOUR
          </button>
          <button onClick={() => props.modifIndex(3)}>
            Suivant
          </button>
        </div>
      </form>
    </div>
  );
}
