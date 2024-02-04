import React, {useState} from 'react';
import "./modal.css"

export default function Modal() {

  // modal
 const [modal, setModal] = useState(false);

const toggleModal = ()=> {
  setModal(!modal)
}

// form

  const [inputState, setInputState] = useState();
  const changeInput = (e) => {
    // console.log(e);
    setInputState(e);
  };

  return (
    <div className="global">
      <button 
      onClick={toggleModal}
      className="btn">Connexion</button>


    

  {modal && (
      <div className="filter">
        <div className="modal">
          <div className="modal-content">
          <form>
            <div className="group-input">
             <input type="text" required id="login"></input>
             <span></span>
             <label for="login">Login:</label>
            </div>
            <div className="group-input">
             <input type="password" required id="password"></input>
             <span></span>
             <label for="password">Mot de passe:</label>
            </div>
            <a className="mdp" href="#">Mot de passe oublié ?</a>
            <input type="submit" value="login"></input>
            <div className="compte">Vous êtez pas membre ? <a href="#">Créer un compte</a></div>
         </form>
            <button
            className='btn-close'
            onClick={toggleModal}
            >X</button>
          </div>
        </div>
      </div>)};
    </div>
  )
}
