---
title: Fonctionnalités avancées en v3
description: Fonctions de classe entreprise et capacités
---

# Fonctionnalités avancées en v3

La version 3 introduit des fonctionnalités de classe entreprise pour les cas d'utilisation avancés.

## Fonctionnalités d'entreprise

### Prise en charge multi-locataire

```javascript
// Basculer entre les locataires
const client = await sdk.createClient({
  tenantId: 'enterprise-123',
  apiKey: process.env.API_KEY
});

const data = await client.data.fetch();
```

### Authentification personnalisée

```javascript
// Support OAuth 2.0
const auth = await sdk.auth.oauth({
  provider: 'google',
  clientId: 'votre-id-client',
  redirectUri: 'https://votreapp.com/callback'
});
```

### Requêtes avancées

```javascript
// Générateur de requêtes complexes
const results = await sdk.query()
  .select(['id', 'name', 'email'])
  .where('status', '=', 'active')
  .where('createdAt', '>', new Date('2024-01-01'))
  .groupBy('role')
  .orderBy('createdAt', 'DESC')
  .limit(100)
  .execute();
```

## Performance à l'échelle

- Gérer des millions d'enregistrements avec pagination
- Traitement automatique des demandes par lot pour l'efficacité
- Mise en commun des connexions pour une utilisation optimale des ressources

## Améliorations de sécurité

- Support du chiffrement de bout en bout
- Limitation de débit d'API et gestion des quotas
- Journalisation d'audit complète

## Migration de v2

La migration est fluide avec la plupart du code v2 fonctionnant sans modifications. Les nouvelles fonctionnalités sont additives.

```bash
npm update @platform/sdk@3
```

## Documentation

- [Guide de migration](/docs/v3/migration)
- [Guide de sécurité](/docs/v3/security)
- [Optimisation des performances](/docs/v3/performance)
