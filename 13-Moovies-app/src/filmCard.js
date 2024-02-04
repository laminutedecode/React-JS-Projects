// Importation de React depuis la bibliothèque 'react'
import React from 'react';

// Définition du composant FilmCard en tant que fonction fléchée prenant comme argument les props destructurées (film)
const FilmCard = ({ film })=> {
  return (
    <div  className="film">
      <p className="film-date">{film.Year}</p>
      <img 
        className="film-img" 
        src={film.Poster !== 'N/A' ? film.Poster  : 'https://via.placeholder.com/300' } 
        alt={film.Title}
      />
      <div className="filter"></div>
      <div className="film-infos">
        <span>{film.Type}</span>
        <h3>{film.Title}</h3>
      </div>
    </div>
  )
}

// Exportation du composant FilmCard en tant que composant par défaut
export  default FilmCard;
