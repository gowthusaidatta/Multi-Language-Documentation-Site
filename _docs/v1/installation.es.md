---
title: Instalación
description: Cómo instalar y configurar el SDK
---

# Instalación

Aprende cómo instalar y configurar nuestro SDK para tu proyecto.

## Requisitos previos

Antes de comenzar, asegúrate de tener:

- Node.js 16.0 o superior
- Gestor de paquetes npm o yarn
- Una clave API válida de nuestra plataforma

## Usando npm

```bash
npm install @platform/sdk
```

## Usando yarn

```bash
yarn add @platform/sdk
```

## Configuración básica

Después de la instalación, inicializa el SDK en tu aplicación:

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: process.env.API_KEY,
  environment: 'production',
  debug: false
});

// Verificar conexión
await sdk.health();
console.log('SDK inicializado correctamente');
```

## Opciones de configuración

| Opción | Tipo | Descripción | Valor por defecto |
|--------|------|-------------|-------------------|
| `apiKey` | string | Tu clave API | Requerido |
| `environment` | string | production, staging, o development | production |
| `debug` | boolean | Habilitar registro de depuración | false |
| `timeout` | number | Tiempo de espera de solicitud en ms | 30000 |

## Variables de entorno

```bash
API_KEY=your-api-key-here
ENVIRONMENT=production
SDK_TIMEOUT=30000
```

## Próximos pasos

Después de la instalación, consulta:

- [Guía de inicio rápido](/docs/v1/quick-start)
- [Referencia de API](/api-reference)
- [Ejemplos](/docs/v1/examples)

## Solución de problemas

### Problemas de instalación

Si encuentras problemas durante la instalación, intenta limpiar tu caché npm:

```bash
npm cache clean --force
npm install @platform/sdk
```

### Problemas de conexión

Asegúrate de que tu clave API sea válida y tu conexión a Internet sea estable.

---

**Versión**: 1.0.0
