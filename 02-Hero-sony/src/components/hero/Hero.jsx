import './hero.css'
import React from 'react'

// Images
import ImageHero from '../../assets/tablet.png'


export default function Hero() {
  return (
    <section className="hero container">
      <div className="hero-content">
        <h1>L'Art de la Connectivité<span> Optimisée</span></h1>
        <p>Innovation Numérique  : <b>Des Tablettes pour un Monde Connecté</b></p>
        <div className="hero-btns">
          <button className="btn btn-1">En savoir plus</button>
          <button className="btn btn-2">Nous contacter</button>
        </div>

      </div>
      <div className="hero-img">
        <img src={ImageHero} alt="" />
      </div>
    </section>
  )
}
