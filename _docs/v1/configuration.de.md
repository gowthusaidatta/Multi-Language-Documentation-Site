# Konfiguration

## SDK konfigurieren

Erfahren Sie, wie Sie das SDK für Ihren spezifischen Anwendungsfall konfigurieren.

### Umgebungskonfiguration

Konfigurieren Sie die folgenden Umgebungsvariablen:

```bash
API_KEY=ihr_api_schlüssel_hier
API_URL=https://api.platform.com
DEBUG=false
LOG_LEVEL=info
```

### Grundkonfiguration

Initialisieren Sie das SDK mit Ihrer Konfiguration:

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL,
  timeout: 30000,
  retries: 3,
});
```

### Erweiterte Optionen

- **Timeout** - Request-Timeout in Millisekunden (Standard: 30000)
- **Retries** - Anzahl automatischer Wiederholungen für fehlgeschlagene Anfragen (Standard: 3)
- **Cache** - Antwort-Caching aktivieren (Standard: true)
- **Logging** - Detaillierte Protokollierung aktivieren (Standard: false)

### Benutzerdefinierte Interceptoren

Fügen Sie benutzerdefinierte Request/Response-Interceptoren hinzu:

```javascript
sdk.interceptors.request.use((config) => {
  config.headers['X-Custom-Header'] = 'value';
  return config;
});

sdk.interceptors.response.use((response) => {
  console.log('Antwort:', response);
  return response;
});
```
