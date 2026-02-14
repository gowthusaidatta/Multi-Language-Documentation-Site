---
title: Démarrage rapide
description: Commencez en 5 minutes
---

# Guide de démarrage rapide

Commencez à utiliser notre plateforme en seulement 5 minutes.

## Étape 1 : Créer un compte

Inscrivez-vous gratuitement sur notre plateforme et obtenez votre clé API.

## Étape 2 : Installer le SDK

```bash
npm install @platform/sdk
```

## Étape 3 : Initialiser le SDK

Créez un nouveau fichier `sdk-init.js`:

```javascript
import { SDK } from '@platform/sdk';

export const sdk = new SDK({
  apiKey: 'votre-clé-api',
  environment: 'production'
});
```

## Étape 4 : Effectuez votre première demande

```javascript
import { sdk } from './sdk-init';

async function getUser() {
  try {
    const user = await sdk.users.get('user-id');
    console.log(user);
  } catch (error) {
    console.error('Erreur:', error.message);
  }
}

getUser();
```

## Étape 5 : Explorez plus de fonctionnalités

Consultez notre [documentation API complète](/api-reference) pour voir ce que vous pouvez faire d'autre avec notre plateforme.

## Cas d'utilisation courants

### Récupération de données

```javascript
const data = await sdk.data.fetch({ limit: 10 });
```

### Créer des ressources

```javascript
const result = await sdk.resources.create({
  name: 'Ma ressource',
  description: 'Une ressource de test'
});
```

### Gestion des erreurs

```javascript
try {
  const result = await sdk.doSomething();
} catch (error) {
  if (error.code === 'UNAUTHORIZED') {
    console.log('Clé API invalide');
  } else {
    console.error('Erreur inattendue:', error);
  }
}
```

## Prochaines étapes

- Lisez la [documentation complète](/docs/v1/installation)
- Explorez [Fonctionnalités avancées](/docs/v1/advanced)
- Vérifiez [Référence API](/api-reference)

Bon codage! 🚀
