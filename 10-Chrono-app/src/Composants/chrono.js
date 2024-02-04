import React from 'react'
import './chrono.css'
import {useState, useEffect, useReducer} from 'react'


export default function Chrono() {
// 1800 / 60 = 30 pour des sessions de 30 minutes

// compteur
  const [chronoSession, setChronoSession] = useState(1800)
// pour le nb de sessions
  const [chronoFixed, setChronoFixed] = useState(1800);
  // pour les pauses (300/60 = 5 pour des pause de 5 minutes)
  const [breakChrono, setBreakChrono] = useState(300)
  const [breakChronoFixed, setBreakChronoFixed] = useState(300)
  // pour le play pause
  const [playChrono, setPlayChrono] = useState(false)


  // useReducer permet de dispatcher et de gerer le state du chrono
const [state, dispatch] = useReducer(reducer)

function reducer(state, action){
switch(action.type){
  case 'TICK':
    if(chronoSession >= 0){
      setChronoSession(chronoSession - 1);
    }else if(breakChrono >= 1){
      setBreakChrono(breakChrono - 1)
    }else if(breakChrono <=0 && chronoSession <=0){
       setChronoSession(chronoFixed);
       setBreakChrono(breakChronoFixed);
    
    }
}
}

  // lancer le chrono
  // useEffect execute une callback en parametres à la fin de l'affichage du premier composant
  // useEffect permet de gerer le cycle de vie d'un composant
  useEffect(() => {
    let id;
    if (playChrono) {
      id = window.setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);
    }
    return () => {
      window.clearInterval(id);
    };
  }, [playChrono]);

// toggle play pause
  const playPause = () => {
    setPlayChrono(!playChrono)
  }

  const handleSession = e => {
    const el = e.target;
    if (el.classList.contains("moins")) {
      if (chronoSession / 60 > 1) {
        setChronoSession(chronoSession - 60);
        setChronoFixed(chronoFixed - 60);
      }
    } else if (el.classList.contains("plus")) {
      setChronoSession(chronoSession + 60);
      setChronoFixed(chronoFixed + 60);
    }
  }

  const handleBreak = e => {
       const el = e.target;
       if (el.classList.contains("moins")) {
         if (breakChrono / 60 > 1) {
           setBreakChrono(breakChrono - 60);
           setBreakChronoFixed(breakChronoFixed - 60);
         }
       } else if (el.classList.contains("plus")) {
         setBreakChrono(breakChrono + 60);
         setBreakChronoFixed(breakChronoFixed + 60);
       }
  }


  // bouton reset
  const resetFunc = ()=> {
    // on arete le chrono
    if (playChrono) {
      setPlayChrono(!playChrono);
    }
    // on rmet le tout à zero
    setChronoSession(chronoFixed);
    setBreakChrono(breakChronoFixed);
  }

  return (
    <section className={playChrono ? 'anim' : "cont"}>
      <h1>CHRONO</h1>
      <div className="container">
        <div className="config">
          <div className="box-btns">
            <button onClick={handleSession} className="moins">
              -
            </button>
            <span>Durée: {chronoFixed / 60} minutes</span>
            <button onClick={handleSession} className="plus">
              +
            </button>
          </div>
          <div className="box-btns pause">
            <button onClick={handleBreak} className="moins">
              -
            </button>
            <span>Pause: {breakChronoFixed / 60} minutes</span>
            <button onClick={handleBreak} className="plus">
              +
            </button>
          </div>
        </div>
        <h1 className="chrono">
          {chronoSession >= 0 ? (
            <span>
              {`${Math.trunc(chronoSession / 60)} : ${
                chronoSession % 60 < 10
                  ? `0${chronoSession % 60}`
                  : `${chronoSession % 60}`
              }`}
            </span>
          ) : (
            <span>
              {`${Math.trunc(breakChrono / 60)} : ${
                breakChrono % 60 < 10
                  ? `0${breakChrono % 60}`
                  : `${breakChrono % 60}`
              }`}
            </span>
          )}
        </h1>
        <div className="controls">
          <button onClick={playPause}>{playChrono ? "Pause" : "Play"}</button>
          <button onClick={resetFunc}>Reset</button>
        </div>
      </div>
    </section>
  );
}
