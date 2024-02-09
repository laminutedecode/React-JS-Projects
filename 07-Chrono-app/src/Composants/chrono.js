import React from 'react'
import './chrono.css'
import {useState, useEffect, useReducer} from 'react'



export default function Chrono() {

  const [chronoSession, setChronoSession] = useState(1800) // Temps restant de la session 30m
  const [chronoFixed, setChronoFixed] = useState(1800) // Temps fixe de la session 30m
  const [breakChrono, setBreakChrono] = useState(300) // Temps restant de la pause 5minute
  const [breakChronoFixed, setBreakChronoFixed] = useState(300) // Temps fixe de la pause 5minue
  const [playChrono, setPlayChrono] = useState(false) // État pour le bouton play/pause


  const [state, dispatch] = useReducer(reducer)

  function reducer(state, action) {
    switch(action.type) {
      case 'TICK':
        if(chronoSession >= 0) {
          setChronoSession(chronoSession - 1)
        } else if(breakChrono >= 1) {
          setBreakChrono(breakChrono - 1)
        } else if(breakChrono <= 0 && chronoSession <= 0) {
          setChronoSession(chronoFixed)
          setBreakChrono(breakChronoFixed)
        }
    }
  }

  useEffect(() => {
    let id
    if (playChrono) {
      id = window.setInterval(() => {
        dispatch({ type: "TICK" })
      }, 1000)
    }
    return () => {
      window.clearInterval(id)
    }
  }, [playChrono])


const playPause = () => {
  setPlayChrono(!playChrono)
}

const handleSession = e => {
  const el = e.target
  if (el.classList.contains("moins")) {
    if (chronoSession / 60 > 1) {
      setChronoSession(chronoSession - 60)
      setChronoFixed(chronoFixed - 60)
    }
  } else if (el.classList.contains("plus")) {
    setChronoSession(chronoSession + 60)
    setChronoFixed(chronoFixed + 60)
  }
}

const handleBreak = e => {
  const el = e.target
  if (el.classList.contains("moins")) {
    if (breakChrono / 60 > 1) {
      setBreakChrono(breakChrono - 60)
      setBreakChronoFixed(breakChronoFixed - 60)
    }
  } else if (el.classList.contains("plus")) {
    setBreakChrono(breakChrono + 60)
    setBreakChronoFixed(breakChronoFixed + 60)
  }
}


const resetFunc = () => {
  if (playChrono) {
    setPlayChrono(!playChrono)
  }
  setChronoSession(chronoFixed)
  setBreakChrono(breakChronoFixed)
}


  return (
    <section className={playChrono ? 'anim' : "cont"}>

      <h1>CHRONO</h1>

      <div className="container">


        <div className="config">

          <div className="box-btns">
            <button onClick={handleSession} className="moins">-</button>
            <span>Durée: {chronoFixed / 60} minutes</span>
            <button onClick={handleSession} className="plus">+</button>
          </div>

          <div className="box-btns pause">
            <button onClick={handleBreak} className="moins">-</button>
            <span>Pause: {breakChronoFixed / 60} minutes</span>
            <button onClick={handleBreak} className="plus">+</button>
          </div>

        </div>

        <h1 className="chrono">

        {chronoSession >= 0 ?
        ( 
        <span> 
    
        {`${Math.trunc(chronoSession / 60)} : ${ // Calcul du nombre entier de minutes restantes
          chronoSession % 60 < 10 ? // Vérifie si le nombre de secondes restantes est inférieur à 10
           `0${chronoSession % 60}` // Si vrai, ajoute un zéro devant les secondes
          : `${chronoSession % 60}` // Sinon, affiche les secondes telles quelles
        }`}
        </span>
          ) : ( 
        <span>
        {`${Math.trunc(breakChrono / 60)} : ${ // Calcul du nombre entier de minutes restantes
          breakChrono % 60 < 10 ? // Vérifie si le nombre de secondes restantes est inférieur à 10
          `0${breakChrono % 60}` // Si vrai, ajoute un zéro devant les secondes
        : `${breakChrono % 60}` // Sinon, affiche les secondes telles quelles
          }`}
        </span>
            )
        }

        </h1>

        <div className="controls">
          <button onClick={playPause}>{playChrono ? "Pause" : "Play"}</button>
          <button onClick={resetFunc}>Reset</button>
        </div>

      </div>

    </section>
  )
}
