# Nom du Projet

Description courte du projet.

## Configuration et Exécution

### Installation des dépendances

- Assurez-vous d'avoir Node.js installé sur votre machine.
- Clonez le dépôt depuis GitHub :

   ```
   git clone https://github.com/bertreux/cour_ci_cd.git cour_ci_cd
   ```

- Accédez au répertoire de votre projet :

   ```
   cd cour_ci_cd
   ```

- Installez les dépendances nécessaires à l'aide de npm :

   ```
   npm install
   ```

### Exécution de l'application

- Une fois les dépendances installées, vous pouvez la démarrer en utilisant la commande npm appropriée. Par exemple :

   ```
   npm run dev
   ```

- Cela démarrera votre serveur et l'application sera accessible à l'URL spécifiée (par défaut, http://localhost:3000).

## Tests Locaux

### Tests unitaires avec Jest

- Vous pouvez exécuter les tests unitaires en utilisant la commande suivante (l'application ne doit pas etre lancer) :

   ```
   npm run test
   ```

- Cela lancera les tests unitaires définis dans votre projet et affichera les résultats dans votre terminal.

### Tests d'interface avec Cypress

- Pour exécuter les tests d'interface avec Cypress, assurez-vous d'avoir l'application en cours d'exécution localement.
- Lancez Cypress en utilisant la commande suivante :

   ```
   npx cypress open
   ```

- Cela ouvrira l'interface de Cypress où vous pourrez sélectionner et exécuter les tests d'interface.
- Ou lancer la commande suivante avec l'application lancer :

   ```
   npx cypress run
   ```

- Cela lancera les tests unitaires définis dans votre projet et affichera les résultats dans votre terminal.