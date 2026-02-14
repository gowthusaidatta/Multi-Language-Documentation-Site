# Configuration

## Configuration du SDK

Apprenez à configurer le SDK pour votre cas d'usage spécifique.

### Configuration de l'Environnement

Configurez les variables d'environnement suivantes:

```bash
API_KEY=votre_clé_api_ici
API_URL=https://api.platform.com
DEBUG=false
LOG_LEVEL=info
```

### Configuration de Base

Initialisez le SDK avec votre configuration:

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL,
  timeout: 30000,
  retries: 3,
});
```

### Options Avancées

- **Timeout** - Délai d'expiration des requêtes en millisecondes (par défaut: 30000)
- **Retries** - Nombre de tentatives automatiques pour les requêtes échouées (par défaut: 3)
- **Cache** - Activer la mise en cache des réponses (par défaut: true)
- **Logging** - Activer la journalisation détaillée (par défaut: false)

### Intercepteurs Personnalisés

Ajoutez des intercepteurs personnalisés de requête/réponse:

```javascript
sdk.interceptors.request.use((config) => {
  config.headers['X-Custom-Header'] = 'value';
  return config;
});

sdk.interceptors.response.use((response) => {
  console.log('Réponse:', response);
  return response;
});
```
