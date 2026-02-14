# Configuración

## Configurando el SDK

Aprende cómo configurar el SDK para tu caso de uso específico.

### Configuración del Entorno

Configura las siguientes variables de entorno:

```bash
API_KEY=tu_clave_api_aqui
API_URL=https://api.platform.com
DEBUG=false
LOG_LEVEL=info
```

### Configuración Básica

Inicializa el SDK con tu configuración:

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL,
  timeout: 30000,
  retries: 3,
});
```

### Opciones Avanzadas

- **Timeout** - Tiempo de espera de solicitud en milisegundos (predeterminado: 30000)
- **Retries** - Número de reintentos automáticos para solicitudes fallidas (predeterminado: 3)
- **Cache** - Activar almacenamiento en caché de respuestas (predeterminado: true)
- **Logging** - Activar registro detallado (predeterminado: false)

### Interceptores Personalizados

Agrega interceptores personalizados de solicitud/respuesta:

```javascript
sdk.interceptors.request.use((config) => {
  config.headers['X-Custom-Header'] = 'value';
  return config;
});

sdk.interceptors.response.use((response) => {
  console.log('Respuesta:', response);
  return response;
});
```
