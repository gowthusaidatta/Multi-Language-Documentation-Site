---
title: Inicio Rápido
description: Comienza en 5 minutos
---

# Inicio Rápido

Comienza a usar nuestra plataforma en solo 5 minutos.

## Paso 1: Crear una cuenta

Regístrate para obtener una cuenta gratuita en nuestra plataforma y obtén tu clave API.

## Paso 2: Instalar el SDK

```bash
npm install @platform/sdk
```

## Paso 3: Inicializar el SDK

Crea un nuevo archivo `sdk-init.js`:

```javascript
import { SDK } from '@platform/sdk';

export const sdk = new SDK({
  apiKey: 'tu-clave-api',
  environment: 'production'
});
```

## Paso 4: Realiza tu primera solicitud

```javascript
import { sdk } from './sdk-init';

async function getUser() {
  try {
    const user = await sdk.users.get('user-id');
    console.log(user);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

getUser();
```

## Paso 5: Explora más características

Consulta nuestra [documentación completa de API](/api-reference) para ver qué más puedes hacer con nuestra plataforma.

## Casos de uso comunes

### Obtener datos

```javascript
const data = await sdk.data.fetch({ limit: 10 });
```

### Crear recursos

```javascript
const result = await sdk.resources.create({
  name: 'Mi recursos',
  description: 'Un recurso de prueba'
});
```

### Manejo de errores

```javascript
try {
  const result = await sdk.doSomething();
} catch (error) {
  if (error.code === 'UNAUTHORIZED') {
    console.log('Clave API inválida');
  } else {
    console.error('Error inesperado:', error);
  }
}
```

## Próximos pasos

- Lee la [Documentación completa](/docs/v1/installation)
- Explora [Características avanzadas](/docs/v1/advanced)
- Consulta [Referencia de API](/api-reference)

¡Feliz codificación! 🚀
