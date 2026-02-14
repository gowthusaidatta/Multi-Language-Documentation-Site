# Commencer

## Aperçu Rapide

Soyez opérationnel avec notre plateforme en 5 minutes.

### Prérequis

Avant de commencer, assurez-vous d'avoir:
- Node.js 16.0 ou version ultérieure
- npm ou yarn comme gestionnaire de paquets
- Un éditeur de code (VS Code recommandé)

### Étape 1: Créer un Compte

1. Visitez [platform.com](https://platform.com)
2. Cliquez sur "S'inscrire"
3. Entrez votre email et mot de passe
4. Vérifiez votre adresse email

### Étape 2: Obtenez Votre Clé API

1. Connectez-vous à votre tableau de bord
2. Accédez à Paramètres → Clés API
3. Cliquez sur "Créer une Nouvelle Clé"
4. Copiez votre clé et gardez-la en sécurité

### Étape 3: Installer le SDK

Utilisez votre gestionnaire de paquets préféré:

```bash
# Utilisant npm
npm install @platform/sdk

# Utilisant yarn
yarn add @platform/sdk
```

### Étape 4: Effectuez Votre Première Requête

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: 'VOTRE_CLÉ_API_ICI',
});

// Votre premier appel API
const data = await sdk.getData();
console.log('Succès!', data);
```

### Étape 5: Explorez Plus

- Lisez notre guide [Installation](/docs/v1/installation)
- Consultez la guide [Configuration](/docs/v1/configuration)
- Explorez la [Référence API](/api-reference)
