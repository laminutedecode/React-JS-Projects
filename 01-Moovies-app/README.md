# Application de Recherche de Films avec React

## Description
Ce dépôt de code contient une application React permettant aux utilisateurs de rechercher des films par titre en utilisant l'API OMDB. L'application affiche une liste de films correspondants aux critères de recherche et propose une interface utilisateur conviviale.

## Mise en Route
Pour utiliser ce code, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Installez les dépendances en exécutant `npm install` dans le répertoire du projet.
4. Exécutez l'application en utilisant `npm start`.
5. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour utiliser l'application.

## Fonctionnalités
- L'application offre les fonctionnalités suivantes :
  - Recherche de films : Les utilisateurs peuvent rechercher des films par titre en utilisant la barre de recherche.
  - Affichage des résultats : Les films correspondant à la recherche sont affichés sous forme de cartes, avec leurs détails.
  
## Structure du Code
- `src/index.js` : Point d'entrée de l'application React.
- `src/App.js` : Le composant React principal qui intègre l'ensemble de l'application.
- `src/filmCard.js` : Le composant React pour la carte de film qui affiche les détails du film.
- `src/App.css` : Le fichier CSS pour styliser l'application.
- `searchIcon.svg` : L'icône de recherche utilisée dans l'interface.

## API OMDB
- L'application utilise l'API OMDB (Open Movie Database) pour rechercher des informations sur les films. L'URL de l'API est définie dans le code et nécessite une clé API valide.

## Licence
Ce code est disponible sous la licence MIT. Vous pouvez trouver les détails complets de la licence dans le fichier LICENSE.

## Auteur
Ce code a été rédigé par Jonathan Benitez. Si vous avez des questions ou avez besoin d'aide, veuillez me contacter à laminutedecode@gmail.com
