---
title: Installation
description: How to install and set up the SDK
---

# Installation

Learn how to install and configure our SDK for your project.

## Prerequisites

Before you begin, ensure you have:

- Node.js 16.0 or higher
- npm or yarn package manager
- A valid API key from our platform

## Using npm

```bash
npm install @platform/sdk
```

## Using yarn

```bash
yarn add @platform/sdk
```

## Basic Setup

After installation, initialize the SDK in your application:

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: process.env.API_KEY,
  environment: 'production',
  debug: false
});

// Verify connection
await sdk.health();
console.log('SDK initialized successfully');
```

## Configuration Options

| Option | Type | Description | Default |
|--------|------|-------------|---------|
| `apiKey` | string | Your API key | Required |
| `environment` | string | production, staging, or development | production |
| `debug` | boolean | Enable debug logging | false |
| `timeout` | number | Request timeout in ms | 30000 |

## Environment Variables

```bash
API_KEY=your-api-key-here
ENVIRONMENT=production
SDK_TIMEOUT=30000
```

## Next Steps

After installation, check out:

- [Quick Start Guide](/docs/v1/quick-start)
- [API Reference](/api-reference)
- [Examples](/docs/v1/examples)

## Troubleshooting

### Installation Issues

If you encounter issues during installation, try clearing your npm cache:

```bash
npm cache clean --force
npm install @platform/sdk
```

### Connection Issues

Make sure your API key is valid and your internet connection is stable.

---

**Version**: 1.0.0
