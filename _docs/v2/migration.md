---
title: Migration Guide - Upgrading from Version 1 to Version 2
description: How to upgrade your implementation from Version 1.0 to Version 2.0
---

# Migration Guide: Version 1 to Version 2

This guide will help you upgrade from Version 1.0 to Version 2.0.

## Breaking Changes

### API Endpoints
The API endpoints have been simplified. Update your endpoint URLs as follows:

- `/api/v1/docs` → `/api/v2/docs`
- `/api/v1/search` → `/api/v2/search`

### Request/Response Format
The JSON structure has been updated for clarity:

**Version 1:**
```json
{
  "data": {
    "content": "..."
  }
}
```

**Version 2:**
```json
{
  "content": "...",
  "metadata": { ... }
}
```

## Migration Steps

1. **Update API Endpoints** - Change all references from `v1` to `v2`
2. **Update Request Handling** - Adjust your code to handle the new JSON structure
3. **Test Thoroughly** - Run all tests to ensure compatibility
4. **Deploy** - Deploy your updated implementation

## New Features in Version 2

- Improved performance
- Better error handling
- Enhanced caching
- New authentication options

## Support

If you encounter any issues during migration, please refer to the [Introduction](/en/docs/v2/introduction) or contact support.
