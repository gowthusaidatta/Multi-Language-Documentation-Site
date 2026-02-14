---
title: Schnellstart
description: Starten Sie in 5 Minuten
---

# Schnellstart-Anleitung

Starten Sie mit unserer Plattform in nur 5 Minuten.

## Schritt 1: Konto erstellen

Melden Sie sich kostenlos auf unserer Plattform an und erhalten Sie Ihren API-Schlüssel.

## Schritt 2: SDK installieren

```bash
npm install @platform/sdk
```

## Schritt 3: SDK initialisieren

Erstellen Sie eine neue Datei `sdk-init.js`:

```javascript
import { SDK } from '@platform/sdk';

export const sdk = new SDK({
  apiKey: 'Ihr-API-Schlüssel',
  environment: 'production'
});
```

## Schritt 4: Machen Sie Ihre erste Anfrage

```javascript
import { sdk } from './sdk-init';

async function getUser() {
  try {
    const user = await sdk.users.get('user-id');
    console.log(user);
  } catch (error) {
    console.error('Fehler:', error.message);
  }
}

getUser();
```

## Schritt 5: Erkunden Sie weitere Funktionen

Konsultieren Sie unsere [vollständige API-Dokumentation](/api-reference), um zu sehen, was Sie mit unserer Plattform noch alles tun können.

## Häufige Anwendungsfälle

### Daten abrufen

```javascript
const data = await sdk.data.fetch({ limit: 10 });
```

### Ressourcen erstellen

```javascript
const result = await sdk.resources.create({
  name: 'Meine Ressource',
  description: 'Eine Test-Ressource'
});
```

### Fehlerbehandlung

```javascript
try {
  const result = await sdk.doSomething();
} catch (error) {
  if (error.code === 'UNAUTHORIZED') {
    console.log('Ungültiger API-Schlüssel');
  } else {
    console.error('Unerwarteter Fehler:', error);
  }
}
```

## Nächste Schritte

- Lesen Sie die [vollständige Dokumentation](/docs/v1/installation)
- Erkunden Sie [Erweiterte Funktionen](/docs/v1/advanced)
- Überprüfen Sie [API-Referenz](/api-reference)

Viel Spaß beim Programmieren! 🚀
