import React from 'react'

import leftBtn from './icons/left.svg'
import rightBtn from './icons/right.svg'



export default function BtnsSlider({direction, moveSlider}) {
  return (
    <div>
      {/*  2) Afficher les boutons */}
      <button onClick={moveSlider}
      //  4) changer la classe apres les props avec une operation ternaire
      className={direction === "next" ? "btns next" : "btns previous"}>
        <img src={direction === "next" ? rightBtn : leftBtn} alt="" />
      </button>
    </div>
  )
}
