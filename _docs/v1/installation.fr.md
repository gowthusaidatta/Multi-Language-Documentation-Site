---
title: Installation
description: Comment installer et configurer le SDK
---

# Installation

Apprenez à installer et à configurer notre SDK pour votre projet.

## Conditions préalables

Avant de commencer, assurez-vous d'avoir :

- Node.js 16.0 ou ultérieur
- Gestionnaire de paquets npm ou yarn
- Une clé API valide de notre plateforme

## Utiliser npm

```bash
npm install @platform/sdk
```

## Utiliser yarn

```bash
yarn add @platform/sdk
```

## Configuration de base

Après l'installation, initialisez le SDK dans votre application :

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: process.env.API_KEY,
  environment: 'production',
  debug: false
});

// Vérifier la connexion
await sdk.health();
console.log('SDK initialisé avec succès');
```

## Options de configuration

| Option | Type | Description | Valeur par défaut |
|--------|------|-------------|-------------------|
| `apiKey` | string | Votre clé API | Requis |
| `environment` | string | production, staging, ou development | production |
| `debug` | boolean | Activer la journalisation de débogage | false |
| `timeout` | number | Délai d'expiration des requêtes en ms | 30000 |

## Variables d'environnement

```bash
API_KEY=your-api-key-here
ENVIRONMENT=production
SDK_TIMEOUT=30000
```

## Prochaines étapes

Après l'installation, consultez :

- [Guide de démarrage rapide](/docs/v1/quick-start)
- [Référence API](/api-reference)
- [Exemples](/docs/v1/examples)

## Dépannage

### Problèmes d'installation

Si vous rencontrez des problèmes lors de l'installation, essayez de vider votre cache npm :

```bash
npm cache clean --force
npm install @platform/sdk
```

### Problèmes de connexion

Assurez-vous que votre clé API est valide et que votre connexion Internet est stable.

---

**Version** : 1.0.0
