# Erste Schritte

## Schnelleinstieg

Werden Sie in nur 5 Minuten betriebsbereit.

### Voraussetzungen

Bevor Sie beginnen, stellen Sie sicher, dass Sie haben:
- Node.js 16.0 oder höher
- npm oder yarn als Paketmanager
- Einen Code-Editor (VS Code empfohlen)

### Schritt 1: Konto Erstellen

1. Besuchen Sie [platform.com](https://platform.com)
2. Klicken Sie auf "Registrieren"
3. Geben Sie Ihre E-Mail und Ihr Passwort ein
4. Verifizieren Sie Ihre E-Mail-Adresse

### Schritt 2: API-Schlüssel Abrufen

1. Melden Sie sich in Ihrem Dashboard an
2. Navigieren Sie zu Einstellungen → API-Schlüssel
3. Klicken Sie auf "Neuen Schlüssel Erstellen"
4. Kopieren Sie Ihren Schlüssel und bewahren Sie ihn sicher auf

### Schritt 3: SDK Installieren

Verwenden Sie Ihren bevorzugten Paketmanager:

```bash
# Mit npm
npm install @platform/sdk

# Mit yarn
yarn add @platform/sdk
```

### Schritt 4: Stellen Sie Ihre Erste Anfrage

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: 'IHR_API_SCHLÜSSEL_HIER',
});

// Ihr erster API-Aufruf
const data = await sdk.getData();
console.log('Erfolg!', data);
```

### Schritt 5: Weitere Erkundung

- Lesen Sie unseren [Installationsleitfaden](/docs/v1/installation)
- Überprüfen Sie den [Konfigurationsleitfaden](/docs/v1/configuration)
- Erkunden Sie die [API-Referenz](/api-reference)
