# Dépannage

## Problèmes Courants et Solutions

Trouvez des solutions aux problèmes courants que vous pourriez rencontrer.

### Problèmes d'Authentification

**Problème**: Erreurs `401 Unauthorized`

**Solution**: Vérifiez que votre clé API est correcte et active:
```javascript
const isValid = sdk.validateApiKey(process.env.API_KEY);
console.log('Clé API valide:', isValid);
```

### Délai d'Expiration de Connexion

**Problème**: Les requêtes expirent

**Solution**: Augmentez la configuration du délai d'expiration:
```javascript
const sdk = new SDK({
  apiKey: process.env.API_KEY,
  timeout: 60000, // 60 secondes
});
```

### Limitation de Débit

**Problème**: Erreurs `429 Too Many Requests`

**Solution**: Implémentez des tentatives avec retrait exponentiel:
```javascript
sdk.use(retry({
  maxRetries: 5,
  backoff: 'exponential',
}));
```

### Dépendances Manquantes

**Problème**: Erreurs de module non trouvé

**Solution**: Réinstallez les dépendances:
```bash
npm install
# ou
yarn install
```

### Mode Débogage

Activez la journalisation de débogage pour voir des informations détaillées:

```javascript
const sdk = new SDK({
  apiKey: process.env.API_KEY,
  debug: true,
  logLevel: 'debug',
});
```

## Obtention d'Aide

Si vous ne trouvez pas de solution:
1. Consultez nos [Questions Fréquemment Posées](/docs/v1/faq)
2. Explorez la [Référence API](/api-reference)
3. Contactez support@platform.com
