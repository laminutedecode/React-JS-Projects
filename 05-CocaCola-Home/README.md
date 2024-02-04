# Page de Produit Coca-Cola en Multilangues avec React

## Description
Ce dépôt de code contient une application React qui affiche une page de produit Coca-Cola en plusieurs langues. Les utilisateurs peuvent basculer entre différentes langues pour afficher le contenu de la page. Le code utilise React pour gérer les composants et le contexte de langue.

## Mise en route
Pour utiliser ce code, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Installez les dépendances en exécutant `npm install` dans le répertoire du projet.
4. Exécutez l'application en utilisant `npm start`.
5. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour visualiser la page de produit Coca-Cola en multilangues.

## Utilisation
- L'application affiche une barre de basculement de langues en haut de la page, qui permet aux utilisateurs de choisir la langue de leur choix.
- Le contenu de la page, y compris le texte et les images, change en fonction de la langue sélectionnée.
- Le code utilise le contexte de langue pour gérer la traduction et l'affichage du contenu dans différentes langues.

## Structure du code
- `src/index.js` : Point d'entrée de l'application React.
- `src/App.js` : Le composant React principal qui intègre le contexte de langue et les composants de la page.
- `src/Components/Contenu/Contenu.js` : Le composant React qui affiche le contenu de la page.
- `src/Components/toggleLangs/ToggleLangs.js` : Le composant React qui gère la barre de basculement de langues.
- `src/context/langContext.js` : Le fichier qui définit le contexte de langue pour l'application.
- `src/App.css` : Le fichier de style CSS pour personnaliser l'apparence de la page.

## Dépendances
- Ce code dépend de React pour la création de l'interface utilisateur.
- Le contexte de langue est géré à l'aide du contexte React. Les dépendances sont listées dans le fichier `package.json` et peuvent être installées en utilisant `npm install`.

## Licence
Ce code est disponible sous la licence MIT. Vous pouvez trouver les détails complets de la licence dans le fichier LICENSE.

## Auteur
Ce code a été rédigé par Jonathan Benitez. Si vous avez des questions ou avez besoin d'aide, veuillez me contacter à laminutedecode@gmail.com.


