---
title: Guía de migración - Actualizar de versión 1 a versión 2
description: Cómo actualizar su implementación de la versión 1.0 a la versión 2.0
---

# Guía de migración: Versión 1 a Versión 2

Esta guía le ayudará a actualizar de la versión 1.0 a la versión 2.0.

## Cambios que rompen la compatibilidad

### Endpoints de API
Los endpoints de la API han sido simplificados. Actualice sus URLs de endpoint de la siguiente manera:

- `/api/v1/docs` → `/api/v2/docs`
- `/api/v1/search` → `/api/v2/search`

### Formato de solicitud/respuesta
La estructura JSON se ha actualizado para mayor claridad:

**Versión 1:**
```json
{
  "data": {
    "content": "..."
  }
}
```

**Versión 2:**
```json
{
  "content": "...",
  "metadata": { ... }
}
```

## Pasos de migración

1. **Actualizar endpoints de API** - Cambiar todas las referencias de `v1` a `v2`
2. **Actualizar manejo de solicitudes** - Ajustar el código para manejar la nueva estructura JSON
3. **Pruebas exhaustivas** - Ejecutar todas las pruebas para garantizar la compatibilidad
4. **Desplegar** - Desplegar su implementación actualizada

## Nuevas características en la versión 2

- Rendimiento mejorado
- Mejor manejo de errores
- Almacenamiento en caché mejorado
- Nuevas opciones de autenticación

## Soporte

Si encuentra problemas durante la migración, consulte la [Introducción](/es/docs/v2/introduction) o póngase en contacto con soporte.
