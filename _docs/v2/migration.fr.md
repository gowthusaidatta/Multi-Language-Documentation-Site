---
title: Guide de migration - Mise à niveau de la version 1 à la version 2
description: Comment mettre à niveau votre implémentation de la version 1.0 à la version 2.0
---

# Guide de migration: Version 1 vers Version 2

Ce guide vous aidera à mettre à niveau de la version 1.0 à la version 2.0.

## Modifications avec rupture

### Points d'accès à l'API
Les points d'accès à l'API ont été simplifiés. Mettez à jour vos URL d'endpoint comme suit:

- `/api/v1/docs` → `/api/v2/docs`
- `/api/v1/search` → `/api/v2/search`

### Format demande/réponse
La structure JSON a été mise à jour pour plus de clarté:

**Version 1:**
```json
{
  "data": {
    "content": "..."
  }
}
```

**Version 2:**
```json
{
  "content": "...",
  "metadata": { ... }
}
```

## Étapes de migration

1. **Mettre à jour les points d'accès à l'API** - Modifier toutes les références de `v1` à `v2`
2. **Mettre à jour la gestion des demandes** - Adapter votre code pour gérer la nouvelle structure JSON
3. **Tester complètement** - Exécuter tous les tests pour assurer la compatibilité
4. **Déployer** - Déployer votre implémentation mise à jour

## Nouvelles fonctionnalités de la version 2

- Performances améliorées
- Meilleure gestion des erreurs
- Mise en cache améliorée
- Nouvelles options d'authentification

## Assistance

Si vous rencontrez des problèmes lors de la migration, veuillez consulter l'[Introduction](/fr/docs/v2/introduction) ou contacter le support.
