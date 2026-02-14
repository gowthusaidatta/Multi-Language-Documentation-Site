---
title: Quick Start
description: Get up and running in 5 minutes
---

# Quick Start

Get up and running with our platform in just 5 minutes.

## Step 1: Create an Account

Sign up for a free account on our platform and obtain your API key.

## Step 2: Install the SDK

```bash
npm install @platform/sdk
```

## Step 3: Initialize the SDK

Create a new file `sdk-init.js`:

```javascript
import { SDK } from '@platform/sdk';

export const sdk = new SDK({
  apiKey: 'your-api-key',
  environment: 'production'
});
```

## Step 4: Make Your First Request

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

## Step 5: Explore More Features

Check out our [complete API documentation](/api-reference) to see what else you can do with our platform.

## Common Use Cases

### Fetching Data

```javascript
const data = await sdk.data.fetch({ limit: 10 });
```

### Creating Resources

```javascript
const result = await sdk.resources.create({
  name: 'My Resource',
  description: 'A test resource'
});
```

### Error Handling

```javascript
try {
  const result = await sdk.doSomething();
} catch (error) {
  if (error.code === 'UNAUTHORIZED') {
    console.log('Invalid API key');
  } else {
    console.error('Unexpected error:', error);
  }
}
```

## Next Steps

- Read the [Full Documentation](/docs/v1/installation)
- Explore [Advanced Features](/docs/v1/advanced)
- Check [API Reference](/api-reference)

Happy coding! 🚀
