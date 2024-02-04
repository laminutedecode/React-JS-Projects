# Galerie d'Images avec React

## Description
Ce dépôt de code contient une application React qui permet aux utilisateurs de rechercher et d'afficher des images à partir d'Unsplash. L'application propose une galerie d'images avec une pagination automatique lorsque l'utilisateur atteint le bas de la page. L'application utilise l'API d'Unsplash pour récupérer les images en fonction de la recherche de l'utilisateur.

## Mise en route
Pour utiliser ce code, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Installez les dépendances en exécutant `npm install` dans le répertoire du projet.
4. Obtenez une clé API gratuite d'Unsplash en vous inscrivant sur [Unsplash Developer](https://unsplash.com/developers) et remplacez `client_id` dans le code avec votre propre clé API.
5. Exécutez l'application en utilisant `npm start`.
6. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour utiliser la galerie d'images.

## Utilisation
- L'application affiche une barre de recherche où les utilisateurs peuvent entrer des mots-clés pour rechercher des images sur Unsplash.
- Les images sont affichées en grille, avec 3 colonnes.
- Lorsque l'utilisateur atteint le bas de la page, de nouvelles images sont automatiquement chargées depuis l'API Unsplash, offrant une pagination infinie.
- Les utilisateurs peuvent cliquer sur une image pour l'afficher en plein écran.

## Structure du code
- `src/index.js` : Point d'entrée de l'application React.
- `src/App.js` : Le composant React principal qui intègre la galerie d'images.
- `src/Composants/gallery.js` : Le composant React qui représente la galerie d'images et gère la recherche, l'affichage des images et la pagination.
- `src/Composants/gallery.css` : Le fichier de style CSS pour personnaliser l'apparence de la galerie.

## Dépendances
- Ce code dépend de React pour la création de l'interface utilisateur et utilise l'API Unsplash pour récupérer les images.

## Licence
Ce code est disponible sous la licence MIT. Vous pouvez trouver les détails complets de la licence dans le fichier LICENSE.

## Auteur
Ce code a été rédigé par Jonathan Benitez. Si vous avez des questions ou avez besoin d'aide, veuillez me contacter à laminutedecode@gmail.com
