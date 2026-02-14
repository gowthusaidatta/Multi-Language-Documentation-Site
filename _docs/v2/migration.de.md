---
title: Migrationsleitfaden - Upgrade von Version 1 zu Version 2
description: Wie Sie Ihre Implementierung von Version 1.0 zu Version 2.0 aktualisieren
---

# Migrationsleitfaden: Version 1 zu Version 2

Diese Anleitung hilft Ihnen beim Upgrade von Version 1.0 zu Version 2.0.

## Änderungen mit Rückwärtskompatibilität

### API-Endpunkte
Die API-Endpunkte wurden vereinfacht. Aktualisieren Sie Ihre Endpunkt-URLs wie folgt:

- `/api/v1/docs` → `/api/v2/docs`
- `/api/v1/search` → `/api/v2/search`

### Anfrage-/Antwortformat
Die JSON-Struktur wurde zur Verdeutlichung aktualisiert:

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

## Migrationsschritte

1. **API-Endpunkte aktualisieren** - Alle Referenzen von `v1` zu `v2` ändern
2. **Anfrageverarbeitung aktualisieren** - Ihren Code an die neue JSON-Struktur anpassen
3. **Grünlich testen** - Alle Tests durchführen, um Kompatibilität sicherzustellen
4. **Bereitstellen** - Ihre aktualisierte Implementierung bereitstellen

## Neue Funktionen in Version 2

- Verbesserte Leistung
- Bessere Fehlerbehandlung
- Verbessertes Caching
- Neue Authentifizierungsoptionen

## Unterstützung

Wenn Sie während der Migration auf Probleme stoßen, konsultieren Sie bitte die [Einführung](/de/docs/v2/introduction) oder kontaktieren Sie den Support.
