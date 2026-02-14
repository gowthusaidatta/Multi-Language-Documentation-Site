# Getting Started

## Quick Overview

Get up and running with our platform in just 5 minutes.

### Prerequisites

Before you begin, make sure you have:
- Node.js 16.0 or higher
- npm or yarn package manager
- A code editor (VS Code recommended)

### Step 1: Create an Account

1. Visit [platform.com](https://platform.com)
2. Click "Sign Up"
3. Enter your email and password
4. Verify your email address

### Step 2: Get Your API Key

1. Log in to your dashboard
2. Navigate to Settings → API Keys
3. Click "Create New Key"
4. Copy your key and save it safely

### Step 3: Install the SDK

Use your favorite package manager:

```bash
# Using npm
npm install @platform/sdk

# Using yarn
yarn add @platform/sdk
```

### Step 4: Make Your First Request

```javascript
import { SDK } from '@platform/sdk';

const sdk = new SDK({
  apiKey: 'YOUR_API_KEY_HERE',
});

// Your first API call
const data = await sdk.getData();
console.log('Success!', data);
```

### Step 5: Explore More

- Read our [Installation](/docs/v1/installation) guide for detailed setup
- Check the [Configuration](/docs/v1/configuration) guide for advanced options
- Browse the [API Reference](/api-reference) for all available methods

### What's Next?

- Build your first application
- Explore our [Quick Start](/docs/v1/quick-start) examples
- Join our community on Discord

### Getting Help

- **Documentation**: Check our guides and API Reference
- **Support**: Email support@platform.com
- **Status**: Check [status.platform.com](https://status.platform.com) for service status
