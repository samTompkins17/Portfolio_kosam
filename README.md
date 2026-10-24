# Portfolio KoSam — version refactorisée

Cette version sépare le document HTML, les styles CSS et les scripts JavaScript.

## Structure

- `index.html` : structure et métadonnées de la page.
- `assets/css/style.css` : styles extraits des blocs `<style>` du fichier d’origine.
- `assets/js/main.js` : script principal et données du portfolio.
- `assets/js/navigation.js` : comportement du menu mobile.
- `assets/images/` : images qui étaient intégrées en Base64 dans le JavaScript d’origine.

## Lancement

Ouvrir `index.html` dans un navigateur. Pour un environnement local, un petit serveur HTTP est préférable.

## Notes de refactorisation

- Les déclarations `title`, `meta` et `link` ont été replacées dans `<head>`.
- Les blocs CSS et JavaScript ont été externalisés.
- Les images Base64 trouvées dans le JavaScript ont été extraites dans `assets/images/` et les références remplacées par des chemins relatifs.
- Le numéro WhatsApp et les autres contenus de la source n’ont pas été volontairement modifiés.

## Vérifications réalisées

- Syntaxe JavaScript vérifiée avec `node --check` pour les deux scripts.
- Vérification HTML structurelle basique.
- Les tests visuels et fonctionnels dans un vrai navigateur restent à effectuer.


## Logo
Le logo officiel fourni est intégré dans l’en-tête via `assets/images/kosam-logo.png`.
