# Application de Connexion avec React

## Description
Ce dépôt de code contient une application React permettant aux utilisateurs de s'inscrire, de se connecter ou de fermer les modals de connexion et d'inscription. L'application offre une interface utilisateur conviviale pour gérer ces fonctionnalités de manière transparente.

## Mise en Route
Pour utiliser ce code, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Installez les dépendances en exécutant `npm install` dans le répertoire du projet.
4. Exécutez l'application en utilisant `npm start`.
5. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour utiliser l'application.

## Fonctionnalités
- L'application offre les fonctionnalités suivantes :
  - Inscription : Les utilisateurs peuvent s'inscrire en remplissant un formulaire d'inscription.
  - Connexion : Les utilisateurs inscrits peuvent se connecter en remplissant un formulaire de connexion.
  - Modals : L'application permet aux utilisateurs d'ouvrir ou de fermer les modals de connexion et d'inscription.
  
## Structure du Code
- `src/index.js` : Point d'entrée de l'application React.
- `src/App.js` : Le composant React principal qui intègre l'ensemble de l'application.
- `src/Pages/Home.js` : Le composant React qui représente la page d'accueil de l'application.
- `src/Reducers/modalsReducer.js` : Le fichier contenant le reducer pour gérer l'état des modals.
- `src/Composants/Form/Signup.js` : Le composant React pour le formulaire d'inscription.
- `src/Composants/Form/Signin.js` : Le composant React pour le formulaire de connexion.
- `src/Composants/Btns/btns.js` : Le composant React pour les boutons d'ouverture des modals.
- `src/Composants/Navbar/Navbar.js` : Le composant React pour la barre de navigation.

## Dépendances
- Ce code utilise React pour la création de l'interface utilisateur.

## Licence
Ce code est disponible sous la licence MIT. Vous pouvez trouver les détails complets de la licence dans le fichier LICENSE.

## Auteur
Ce code a été rédigé par Jonathan Benitez. Si vous avez des questions ou avez besoin d'aide, veuillez me contacter à laminutedecode@gmail.com
