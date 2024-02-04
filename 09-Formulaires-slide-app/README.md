# Formulaire de Connexion et d'Inscription en React

## Description
Ce dépôt de code contient une application React qui propose un formulaire de connexion et d'inscription en plusieurs étapes. L'application utilise un composant de barre de progression pour indiquer l'étape en cours. Les utilisateurs peuvent remplir les informations requises pour créer un compte, y compris le nom, le prénom, l'âge, l'adresse e-mail, le pseudo et le mot de passe. Le code utilise React pour gérer les différentes étapes du formulaire et collecter les données saisies par l'utilisateur.

## Mise en route
Pour utiliser ce code, suivez ces étapes :

1. Clonez le dépôt sur votre machine locale.
2. Assurez-vous d'avoir Node.js installé sur votre machine.
3. Installez les dépendances en exécutant `npm install` dans le répertoire du projet.
4. Exécutez l'application en utilisant `npm start`.
5. Ouvrez votre navigateur et accédez à `http://localhost:3000` pour utiliser le formulaire de connexion et d'inscription.

## Utilisation
- L'application affiche un formulaire de connexion et d'inscription en plusieurs étapes.
- Les utilisateurs peuvent avancer d'une étape à l'autre en remplissant les informations requises.
- Les étapes incluent la saisie du nom, du prénom, de l'âge, de l'adresse e-mail, du pseudo et du mot de passe.
- Une barre de progression indique l'étape en cours.
- Le code utilise React pour gérer les étapes du formulaire et collecter les données saisies par l'utilisateur.

## Structure du code
- `src/index.js` : Point d'entrée de l'application React.
- `src/App.js` : Le composant React principal qui intègre le formulaire et la barre de progression.
- `src/components/MultiForm/MultiForm.js` : Le composant React qui représente le formulaire de connexion et d'inscription.
- `src/components/elements/progressbar/ProgressBar.js` : Le composant React qui affiche la barre de progression.
- `src/components/elements/carte/CarteStart.js` : Le composant React qui représente la première étape du formulaire.
- `src/components/SubForms/Formulaire-Info.js` : Le composant React qui représente la deuxième étape du formulaire.
- `src/components/SubForms/Formulaire-pseudo.js` : Le composant React qui représente la troisième étape du formulaire.
- `src/components/SubForms/Formulaire-mdp.js` : Le composant React qui représente la quatrième étape du formulaire.
- `src/components/elements/carte/CarteEnd.js` : Le composant React qui représente la dernière étape du formulaire.

## Dépendances
- Ce code dépend de React pour la création de l'interface utilisateur.

## Licence
Ce code est disponible sous la licence MIT. Vous pouvez trouver les détails complets de la licence dans le fichier LICENSE.

## Auteur
Ce code a été rédigé par Jonathan Benitez. Si vous avez des questions ou avez besoin d'aide, veuillez me contacter à laminutedecode@gmail.ccom
