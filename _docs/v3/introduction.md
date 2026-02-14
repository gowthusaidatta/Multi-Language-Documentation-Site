---
title: Advanced Features in v3
description: Enterprise-grade features and capabilities
---

# Advanced Features in v3

Version 3 introduces enterprise-grade features for advanced use cases.

## Enterprise Features

### Multi-Tenant Support

```javascript
// Switch between tenants
const client = await sdk.createClient({
  tenantId: 'enterprise-123',
  apiKey: process.env.API_KEY
});

const data = await client.data.fetch();
```

### Custom Authentication

```javascript
// OAuth 2.0 support
const auth = await sdk.auth.oauth({
  provider: 'google',
  clientId: 'your-client-id',
  redirectUri: 'https://yourapp.com/callback'
});
```

### Advanced Querying

```javascript
// Complex query builder
const results = await sdk.query()
  .select(['id', 'name', 'email'])
  .where('status', '=', 'active')
  .where('createdAt', '>', new Date('2024-01-01'))
  .groupBy('role')
  .orderBy('createdAt', 'DESC')
  .limit(100)
  .execute();
```

## Performance at Scale

- Handle millions of records with pagination
- Automatic request batching for efficiency
- Connection pooling for optimal resource usage

## Security Enhancements

- End-to-end encryption support
- API rate limiting and quota management
- Comprehensive audit logging

## Migration from v2

The migration is smooth with most v2 code working without changes. New features are additive.

```bash
npm update @platform/sdk@3
```

## Documentation

- [Migration Guide](/docs/v3/migration)
- [Security Guide](/docs/v3/security)
- [Performance Tuning](/docs/v3/performance)
