# Fehlerbehebung

## Häufige Probleme und Lösungen

Finden Sie Lösungen für häufig auftretende Probleme.

### Authentifizierungsprobleme

**Problem**: `401 Unauthorized` Fehler

**Lösung**: Überprüfen Sie, dass Ihr API-Schlüssel korrekt und aktiv ist:
```javascript
const isValid = sdk.validateApiKey(process.env.API_KEY);
console.log('API-Schlüssel gültig:', isValid);
```

### Verbindungs-Timeout

**Problem**: Anfragen überschreiten das Zeitlimit

**Lösung**: Erhöhen Sie das Timeout:
```javascript
const sdk = new SDK({
  apiKey: process.env.API_KEY,
  timeout: 60000, // 60 Sekunden
});
```

### Ratenbegrenzung

**Problem**: `429 Too Many Requests` Fehler

**Lösung**: Implementieren Sie Wiederholung mit exponentiellem Backoff:
```javascript
sdk.use(retry({
  maxRetries: 5,
  backoff: 'exponential',
}));
```

### Fehlende Abhängigkeiten

**Problem**: Fehler beim Laden von Modulen

**Lösung**: Installieren Sie Abhängigkeiten neu:
```bash
npm install
# oder
yarn install
```

### Debugmodus

Aktivieren Sie Debug-Protokollierung, um detaillierte Informationen anzuzeigen:

```javascript
const sdk = new SDK({
  apiKey: process.env.API_KEY,
  debug: true,
  logLevel: 'debug',
});
```

## Hilfe Erhalten

Wenn Sie keine Lösung finden:
1. Konsultieren Sie unsere [Häufig Gestellte Fragen](/docs/v1/faq)
2. Erkunden Sie die [API-Referenz](/api-reference)
3. Kontaktieren Sie support@platform.com
