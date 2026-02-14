---
title: What's New in v2
description: New features and improvements in version 2
---

# What's New in v2

Version 2 brings significant improvements and new features to our platform.

## Major Features

### Performance Improvements
- 50% faster API responses
- Improved caching mechanisms
- Optimized database queries

### New Endpoints
We've added new endpoints for advanced features:

```javascript
// New analytics endpoint
const analytics = await sdk.analytics.getMetrics({
  startDate: '2025-01-01',
  endDate: '2025-01-31'
});

// New batch operations
const results = await sdk.batch.process([
  { action: 'create', data: { name: 'Item 1' } },
  { action: 'update', id: 'item-2', data: { name: 'Updated' } }
]);
```

### WebSocket Support
Real-time data streaming is now available:

```javascript
const stream = await sdk.subscribe('events/realtime');
stream.on('message', (data) => {
  console.log('Real-time event:', data);
});
```

## Breaking Changes

### Deprecated Methods
- `sdk.users.fetch()` → Use `sdk.users.list()` instead
- `sdk.data.get()` → Use `sdk.data.retrieve()` instead

### Updated Response Format
Responses now follow a consistent format:

```javascript
{
  success: true,
  data: { /* your data */ },
  meta: {
    timestamp: '2025-01-15T10:00:00Z',
    version: '2.0.0'
  }
}
```

## Migration Guide

To upgrade from v1 to v2:

```bash
npm update @platform/sdk
```

Then update your code to use the new method names and response formats.

## Performance Benchmarks

| Operation | v1 | v2 | Improvement |
|-----------|----|----|------------|
| List users | 450ms | 220ms | 51% faster |
| Create resource | 600ms | 280ms | 53% faster |
| Query data | 800ms | 350ms | 56% faster |

## Get Help

- [Migration Guide](/docs/v2/migration)
- [New Features Guide](/docs/v2/features)
- [API Reference](/api-reference)
