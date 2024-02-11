import './form.css';
import {useDispatch, useSelector} from 'react-redux'


export default function SignIn(){


  const activeModal = useSelector(state => state);
  const dispatch = useDispatch();

  const closeModal = ()=> {
    dispatch({
      type: "CLOSEMODAL"
    })
  }

  return (
    <div className={activeModal.ActiveSignUp ? "globalForm" : "hide-modal"}>
      <div onClick={closeModal} className="overlay"></div>
      <div className="modal">
        <form className="formAuth">
          <h2>INSCRIPTION</h2>
          <div className="formGroup">
            <input type="email" id="mailSignIn" required/>
            <span></span>
            <label htmlFor="mailSignIn">Indiquez votre e-mail</label>
          </div>
          <div className="formGroup">
            <input type="password" id="passwordSignUp" required/>
            <span></span>
            <label htmlFor="passwordSignUp">Indiquez votre mot de passe</label>
          </div>
          <div className="formGroup">
            <input type="password" id="comfirmPasswordSignIn" required/>
            <span></span>
            <label htmlFor="comfirmPasswordSignIn">Confirmez votre mot de passe</label>
          </div>
          <button className='formBtn'>Se connecter</button>
        </form>
        <button onClick={closeModal} className="formClose">X</button>
      </div>

    </div>
  )






}