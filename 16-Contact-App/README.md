# Application de Contacts avec React

## Description
Ce dépôt de code contient une application de contacts en React qui permet aux utilisateurs de gérer leur liste de contacts. Les utilisateurs peuvent ajouter de nouveaux contacts, mettre à jour les informations de contact existantes, filtrer les contacts par nom et afficher une liste de contacts.

## Mise en Route
Pour utiliser cette application, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Installez les dépendances en exécutant `npm install` dans le répertoire du projet.
4. Configurez votre base de données Firebase en suivant les instructions dans le fichier `config/firebase.js`.
5. Exécutez l'application en utilisant `npm start`.
6. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour utiliser l'application de contacts.

## Fonctionnalités
- L'application de contacts offre les fonctionnalités suivantes :
  - Affichage de la liste des contacts : Les utilisateurs peuvent voir la liste de leurs contacts existants.
  - Ajout de nouveaux contacts : Les utilisateurs peuvent ajouter de nouveaux contacts en remplissant un formulaire.
  - Mise à jour des contacts : Les utilisateurs peuvent mettre à jour les informations de contact existantes en cliquant sur un contact.
  - Filtrage des contacts : Les utilisateurs peuvent filtrer les contacts en fonction du nom.
  - Notifications : Les notifications sont affichées en bas de l'écran pour indiquer les actions effectuées.

## Structure du Code
- `src/index.js` : Point d'entrée de l'application React.
- `src/App.js` : Le composant React principal qui intègre l'ensemble de l'application de contacts.
- `src/hook/useModal.js` : Un hook personnalisé pour gérer la logique de la fenêtre modale.
- `src/config/firebase.js` : Configuration de la base de données Firebase.
- `src/assets/logo.png` : Le logo de l'application.
- `src/composants/Cards.js` : Le composant pour afficher les cartes de contacts.
- `src/composants/AddAndUpdateContact.js` : Le composant pour ajouter ou mettre à jour un contact.
- `src/composants/Not.js` : Le composant pour afficher un message lorsque la liste de contacts est vide.

## Licence
Ce code est disponible sous la licence MIT. Vous pouvez trouver les détails complets de la licence dans le fichier LICENSE.

## Auteur
Ce code a été rédigé par  Jonathan Benitez. Si vous avez des questions ou avez besoin d'aide, veuillez me contacter à laminutedecode@gmail.com
