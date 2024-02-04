# Application ToDo List en React

## Description
Ce dépôt de code contient une application React de liste de tâches (ToDo List) simple. Les utilisateurs peuvent ajouter des tâches à accomplir, les supprimer individuellement et voir la liste des tâches restantes. Le code utilise React pour la gestion de l'état et l'ajout de nouvelles tâches.

## Mise en route
Pour utiliser ce code, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Installez les dépendances en exécutant `npm install` dans le répertoire du projet.
4. Exécutez l'application en utilisant `npm start`.
5. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour utiliser l'application ToDo List.

## Utilisation
- L'application affiche un formulaire où vous pouvez ajouter de nouvelles tâches en entrant un texte et en cliquant sur le bouton "Envoyer".
- Chaque tâche ajoutée est affichée dans une liste avec un bouton de suppression à côté.
- Pour supprimer une tâche, cliquez sur le bouton de suppression correspondant à la tâche que vous souhaitez supprimer.
- La liste des tâches est mise à jour en temps réel.
- Vous pouvez ajouter autant de tâches que vous le souhaitez.

## Structure du code
- `src/index.js` : Point d'entrée de l'application React.
- `src/compnents/Form.js` : Le composant React principal qui gère la liste de tâches.
- `src/compnents/item.js` : Le composant React qui représente chaque tâche dans la liste.
- D'autres fichiers sont créés automatiquement par Create React App.

## Dépendances
- Ce code dépend de React pour la création de l'interface utilisateur.
- Cette application utilise le framework css Bulma. Vous pouvez l'installer en utilisant `npm install bulma`.
- La bibliothèque "uuid" est utilisée pour générer des identifiants uniques pour chaque tâche. Vous pouvez l'installer en utilisant `npm install uuid`.

## Licence
Ce code est disponible sous la licence MIT. Vous pouvez trouver les détails complets de la licence dans le fichier LICENSE.

## Auteur
Ce code a été rédigé par Jonathan Benitez. Si vous avez des questions ou avez besoin d'aide, veuillez me contacter à laminutedecode@gmail.com

Profitez de l'utilisation de cette application ToDo List en React !
