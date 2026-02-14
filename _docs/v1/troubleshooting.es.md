# Solución de Problemas

## Problemas Comunes y Soluciones

Encuentra soluciones a problemas comunes al usar la plataforma.

### Problemas de Autenticación

**Problema**: Recibiendo errores `401 Unauthorized`

**Solución**: Verifica que tu clave API es correcta y activa:
```javascript
const isValid = sdk.validateApiKey(process.env.API_KEY);
console.log('Clave API válida:', isValid);
```

### Tiempo de Conexión Agotado

**Problema**: Las solicitudes se están agotando el tiempo de espera

**Solución**: Aumenta la configuración de tiempo de espera:
```javascript
const sdk = new SDK({
  apiKey: process.env.API_KEY,
  timeout: 60000, // 60 segundos
});
```

### Límite de Velocidad

**Problema**: Recibiendo errores `429 Too Many Requests`

**Solución**: Implementa reintento con retroceso exponencial:
```javascript
sdk.use(retry({
  maxRetries: 5,
  backoff: 'exponential',
}));
```

### Dependencias Faltantes

**Problema**: Errores de módulo no encontrado

**Solución**: Reinstala las dependencias:
```bash
npm install
# o
yarn install
```

### Modo de Depuración

Activa el registro de depuración para ver información detallada:

```javascript
const sdk = new SDK({
  apiKey: process.env.API_KEY,
  debug: true,
  logLevel: 'debug',
});
```

## Obteniendo Ayuda

Si no puedes encontrar una solución:
1. Consulta nuestras [Preguntas Frecuentes](/docs/v1/faq)
2. Explora la [Referencia de API](/api-reference)
3. Pónte en contacto con support@platform.com
