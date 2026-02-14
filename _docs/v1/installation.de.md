---
title: Installation
description: So installieren und konfigurieren Sie das SDK
---

# Installation

Erfahren Sie, wie Sie unser SDK für Ihr Projekt installieren und konfigurieren.

## Voraussetzungen

Stellen Sie vor dem Start sicher, dass Sie Folgendes haben:

- Node.js 16.0 oder höher
- npm oder yarn Paketmanager
- Ein gültiger API-Schlüssel von unserer Plattform

## NPM verwenden

```bash
npm install @platform/sdk
```

## Yarn verwenden

```bash
yarn add @platform/sdk
```

## Grundlegende Einrichtung

Initialisieren Sie das SDK nach der Installation in Ihrer Anwendung:

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: process.env.API_KEY,
  environment: 'production',
  debug: false
});

// Verbindung überprüfen
await sdk.health();
console.log('SDK erfolgreich initialisiert');
```

## Konfigurationsoptionen

| Option | Typ | Beschreibung | Standardwert |
|--------|------|-------------|-------------|
| `apiKey` | string | Ihr API-Schlüssel | Erforderlich |
| `environment` | string | production, staging, oder development | production |
| `debug` | boolean | Debug-Protokollierung aktivieren | false |
| `timeout` | number | Request-Timeout in ms | 30000 |

## Umgebungsvariablen

```bash
API_KEY=your-api-key-here
ENVIRONMENT=production
SDK_TIMEOUT=30000
```

## Nächste Schritte

Nach der Installation konsultieren Sie:

- [Schnellstarthandbuch](/docs/v1/quick-start)
- [API-Referenz](/api-reference)
- [Beispiele](/docs/v1/examples)

## Fehlerbehebung

### Installationsprobleme

Wenn Sie während der Installation auf Probleme stoßen, versuchen Sie, Ihren npm-Cache zu löschen:

```bash
npm cache clean --force
npm install @platform/sdk
```

### Verbindungsprobleme

Stellen Sie sicher, dass Ihr API-Schlüssel gültig und Ihre Internetverbindung stabil ist.

---

**Version**: 1.0.0
