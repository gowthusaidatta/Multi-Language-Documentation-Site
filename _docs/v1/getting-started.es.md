# Primeros Pasos

## Descripción General Rápida

Empieza con nuestra plataforma en solo 5 minutos.

### Requisitos Previos

Antes de comenzar, asegúrate de tener:
- Node.js 16.0 o superior
- npm o yarn como gestor de paquetes
- Un editor de código (VS Code recomendado)

### Paso 1: Crear una Cuenta

1. Visita [platform.com](https://platform.com)
2. Haz clic en "Registrarse"
3. Ingresa tu email y contraseña
4. Verifica tu dirección de correo

### Paso 2: Obtén tu Clave API

1. Inicia sesión en tu panel de control
2. Ve a Configuración → Claves API
3. Haz clic en "Crear Nueva Clave"
4. Copia tu clave y guárdala en un lugar seguro

### Paso 3: Instala el SDK

Usa tu gestor de paquetes favorito:

```bash
# Usando npm
npm install @platform/sdk

# Usando yarn
yarn add @platform/sdk
```

### Paso 4: Realiza tu Primera Solicitud

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: 'TU_CLAVE_API_AQUI',
});

// Tu primera llamada API
const data = await sdk.getData();
console.log('¡Éxito!', data);
```

### Paso 5: Explora Más

- Lee nuestra guía de [Instalación](/docs/v1/installation)
- Consulta la guía de [Configuración](/docs/v1/configuration)
- Explora la [Referencia de API](/api-reference)
