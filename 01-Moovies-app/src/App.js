// Importation des fonctions useState et useEffect depuis la bibliothèque 'react'
import {useState, useEffect} from 'react';

// Importation du fichier CSS pour le composant App
import './App.css';

// Importation de l'icône de recherche depuis le fichier searchIcon.svg
import searchIcon from './searchIcon.svg';

// Importation du composant FilmCard depuis le fichier filmCard.js
import FilmCard from './filmCard';

// URL de l'API pour obtenir les informations des films
const API_URL = 'http://www.omdbapi.com?apikey=bf186340';

// Définition du composant App
const App = () => {

  // Utilisation du hook useState pour déclarer deux variables d'état : films et searchFilm
  const [films, setFilms ] = useState([]);
  const [searchFilm, setSearchFilm ] = useState([]);

  // Fonction asynchrone pour rechercher des films en utilisant l'API
  const rechercheFilms = async (titre) => {
    // Effectue une requête GET à l'API en utilisant le titre du film comme paramètre
    const response = await fetch(`${API_URL}&s=${titre}`);
    // Récupère les données de la réponse sous forme de JSON
    const data = await response.json();
console.table(data)
    // Met à jour l'état 'films' avec les résultats de la recherche
    setFilms(data.Search);
  }

  // Utilisation du hook useEffect pour exécuter la fonction rechercheFilms une fois lors du rendu initial
  useEffect(()=> {
    rechercheFilms('batman');
  }, []);

  // Rendu du composant App
  return (
    <div className="app">
      <h1>MOOVIES</h1>

      <div className="search">
        <input 
          type="text" 
          placeholder="Rechercher votre film" 
          value={searchFilm}
          onChange={(e)=> setSearchFilm(e.target.value)} 
        />
        <img 
          src={searchIcon} 
          alt="Search" 
          onClick={()=>rechercheFilms(searchFilm)}
        />
      </div>

      {
        // Vérifie si la liste des films est vide ou non
        films?.length > 0 ? (
          // Si des films sont trouvés, les affiche dans un conteneur
          <div className="container">
            {films.map((film) => (
              <FilmCard film={film}/>
            ))}
          </div>
        ) : (
          // Si aucun film n'est trouvé, affiche un message
          <div className="empty">
            <h2>Nous n'avons pas ce film</h2>
          </div>
        )
      }
    </div>
  );
}

// Exportation du composant App en tant que composant par défaut
export default App;
