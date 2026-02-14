---
title: Novedades en v2
description: Nuevas características y mejoras en la versión 2
---

# Novedades en v2

La versión 2 trae mejoras significativas y nuevas características a nuestra plataforma.

## Características principales

### Mejoras de rendimiento
- Respuestas de API 50% más rápidas
- Mecanismos de almacenamiento en caché mejorados
- Consultas de base de datos optimizadas

### Nuevos endpoints
Hemos agregado nuevos endpoints para características avanzadas:

```javascript
// Nuevo endpoint de análisis
const analytics = await sdk.analytics.getMetrics({
  startDate: '2025-01-01',
  endDate: '2025-01-31'
});

// Nuevas operaciones por lotes
const results = await sdk.batch.process([
  { action: 'create', data: { name: 'Elemento 1' } },
  { action: 'update', id: 'elemento-2', data: { name: 'Actualizado' } }
]);
```

### Soporte WebSocket
La transmisión de datos en tiempo real ahora está disponible:

```javascript
const stream = await sdk.subscribe('events/realtime');
stream.on('message', (data) => {
  console.log('Evento en tiempo real:', data);
});
```

## Cambios importantes

### Métodos deprecados
- `sdk.users.fetch()` → Usar `sdk.users.list()` en su lugar
- `sdk.data.get()` → Usar `sdk.data.retrieve()` en su lugar

### Formato de respuesta actualizado
Las respuestas ahora siguen un formato consistente:

```javascript
{
  success: true,
  data: { /* tus datos */ },
  meta: {
    timestamp: '2025-01-15T10:00:00Z',
    version: '2.0.0'
  }
}
```

## Guía de migración

Para actualizar de v1 a v2:

```bash
npm update @platform/sdk
```

Luego actualiza tu código para usar los nuevos nombres de métodos y formatos de respuesta.

## Benchmarks de rendimiento

| Operación | v1 | v2 | Mejora |
|-----------|----|----|--------|
| Listar usuarios | 450ms | 220ms | 51% más rápido |
| Crear recurso | 600ms | 280ms | 53% más rápido |
| Consultar datos | 800ms | 350ms | 56% más rápido |

## Obtener ayuda

- [Guía de migración](/docs/v2/migration)
- [Guía de nuevas características](/docs/v2/features)
- [Referencia de API](/api-reference)
