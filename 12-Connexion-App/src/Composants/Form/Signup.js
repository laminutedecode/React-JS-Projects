
import "./form.css";
import { useSelector, useDispatch } from "react-redux";


export default function SignUp() {



  const activeModal = useSelector((state) => state);

  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch({
      type: "CLOSEMODAL",
    });
  };


  return (
    <div className={activeModal.ActiveSignUp ? "globalForm " : "hide-modal"}>
      <div onClick={closeModal} className="overlay"></div>
      <div className="modal">
        <form method="post" className="formAuth">
          <h2>Inscription</h2>
          <div className="formGroup">
            <input type="email" id="mail" required/>
            <span></span>
            <label htmlFor="mail">Indiquez votre mail</label>
          </div>
          <div className="formGroup">
            <input type="password" id="password" required />
            <span></span>
            <label htmlFor="password">Indiquez votre mot de passe</label>
          </div>
          <div className="formGroup">
            <input
              type="password"
              id="confirmPassword"
              required
      
            />
            <span></span>
            <label htmlFor="confirmPassword">
              Comfirmez votre mot de passe
            </label>
          </div>
          <button className="formBtn">Créer un compte</button>

        </form>
        <button onClick={closeModal} className="formClose">
          X
        </button>
      </div>
    </div>
  );
}
