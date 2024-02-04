// Importation des modules nécessaires depuis React
import React, { createContext, useState } from 'react';

// Création d'un contexte avec createContext() et exportation du contexte créé
export const Context = createContext();

// Tableau des langues supportées dans l'application
const multiLangs = ['EN', 'FR', 'ES'];

// Récupération de la langue du navigateur de l'utilisateur
let browserLang = navigator.language.slice(0, 2).toUpperCase();

// Vérification si la langue du navigateur est parmi les langues supportées
if (multiLangs.indexOf(browserLang) === -1) {
  // Si la langue n'est pas supportée, utilise la langue par défaut (EN)
  browserLang = "EN";
}

// Définition du composant ContextProvider
const ContextProvider = (props) => {
  // Utilisation de useState pour gérer l'état de la langue
  const [lang, setLang] = useState(browserLang);

  // Fonction pour changer la langue
  const toggleLang = (changeLang) => {
    setLang(changeLang);
  };

  // Rendu du composant ContextProvider
  return (
    // Fournit la valeur du contexte (langue et fonction pour changer la langue) aux composants enfants
    <Context.Provider value={{ lang, toggleLang }}>
      {props.children}
    </Context.Provider>
  );
};

// Exportation du composant ContextProvider par défaut
export default ContextProvider;
