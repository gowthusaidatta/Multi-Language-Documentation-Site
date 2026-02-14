---
title: Quoi de neuf en v2
description: Nouvelles fonctionnalités et améliorations de la version 2
---

# Quoi de neuf en v2

La version 2 apporte des améliorations significatives et de nouvelles fonctionnalités à notre plateforme.

## Fonctionnalités principales

### Améliorations des performances
- Réponses API 50% plus rapides
- Mécanismes de mise en cache améliorés
- Requêtes de base de données optimisées

### Nouveaux points de terminaison
Nous avons ajouté de nouveaux points de terminaison pour les fonctionnalités avancées :

```javascript
// Nouveau point de terminaison d'analyse
const analytics = await sdk.analytics.getMetrics({
  startDate: '2025-01-01',
  endDate: '2025-01-31'
});

// Nouvelles opérations par lot
const results = await sdk.batch.process([
  { action: 'create', data: { name: 'Élément 1' } },
  { action: 'update', id: 'élément-2', data: { name: 'Mis à jour' } }
]);
```

### Support WebSocket
La diffusion de données en temps réel est maintenant disponible :

```javascript
const stream = await sdk.subscribe('events/realtime');
stream.on('message', (data) => {
  console.log('Événement en temps réel:', data);
});
```

## Changements majeurs

### Méthodes obsolètes
- `sdk.users.fetch()` → Utilisez `sdk.users.list()` à la place
- `sdk.data.get()` → Utilisez `sdk.data.retrieve()` à la place

### Format de réponse mis à jour
Les réponses suivent maintenant un format cohérent :

```javascript
{
  success: true,
  data: { /* vos données */ },
  meta: {
    timestamp: '2025-01-15T10:00:00Z',
    version: '2.0.0'
  }
}
```

## Guide de migration

Pour mettre à niveau de v1 à v2 :

```bash
npm update @platform/sdk
```

Mettez ensuite à jour votre code pour utiliser les nouveaux noms de méthodes et les formats de réponse.

## Références de performance

| Opération | v1 | v2 | Amélioration |
|-----------|----|----|-------------|
| Lister les utilisateurs | 450ms | 220ms | 51% plus rapide |
| Créer une ressource | 600ms | 280ms | 53% plus rapide |
| Interroger les données | 800ms | 350ms | 56% plus rapide |

## Obtenir de l'aide

- [Guide de migration](/docs/v2/migration)
- [Guide des nouvelles fonctionnalités](/docs/v2/features)
- [Référence API](/api-reference)
