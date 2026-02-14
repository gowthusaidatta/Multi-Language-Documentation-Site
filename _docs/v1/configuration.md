# Configuration

## Configuring the SDK

Learn how to configure the SDK for your specific use case.

### Environment Setup

Configure the following environment variables:

```bash
API_KEY=your_api_key_here
API_URL=https://api.platform.com
DEBUG=false
LOG_LEVEL=info
```

### Basic Configuration

Initialize the SDK with your configuration:

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: process.env.API_KEY,
  apiUrl: process.env.API_URL,
  timeout: 30000,
  retries: 3,
});
```

### Advanced Options

- **Timeout** - Request timeout in milliseconds (default: 30000)
- **Retries** - Number of automatic retries for failed requests (default: 3)
- **Cache** - Enable response caching (default: true)
- **Logging** - Enable detailed logging (default: false)

### Custom Interceptors

Add custom request/response interceptors:

```javascript
sdk.interceptors.request.use((config) => {
  config.headers['X-Custom-Header'] = 'value';
  return config;
});

sdk.interceptors.response.use((response) => {
  console.log('Response:', response);
  return response;
});
```
