# ext-messaging

[![npm version](https://img.shields.io/npm/v/@theluckystrike/ext-messaging)](https://npmjs.com/package/@theluckystrike/ext-messaging)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/)
[![CI Status](https://github.com/theluckystrike/ext-messaging/actions/workflows/ci.yml/badge.svg)](https://github.com/theluckystrike/ext-messaging/actions)
[![Discord](https://img.shields.io/badge/Discord-Zovo-blueviolet.svg?logo=discord)](https://discord.gg/zovo)
[![Website](https://img.shields.io/badge/Website-zovo.one-blue)](https://zovo.one)
[![GitHub Stars](https://img.shields.io/github/stars/theluckystrike/ext-messaging?style=social)](https://github.com/theluckystrike/ext-messaging)

> Cross-context messaging library for Chrome extensions.

Part of the [Zovo](https://zovo.one) family of privacy-first Chrome extensions and developer tools.

## Overview

`ext-messaging` is a TypeScript library that provides seamless communication between different contexts in Chrome extensions — background scripts, content scripts, popups, and options pages.

## Features

- ✅ **TypeScript Support** - Fully typed for better developer experience
- ✅ **Promise-based API** - Modern async/await syntax
- ✅ **MV3 Compatible** - Works with Manifest V3 extensions
- ✅ **Type-safe** - Full type safety for message passing
- ✅ **Lightweight** - Minimal dependencies
- ✅ **Privacy-First** - No data collection, all local

## Installation

### From npm

```bash
npm install @theluckystrike/ext-messaging
```

### From Source

```bash
# Clone the repository
git clone https://github.com/theluckystrike/ext-messaging.git
cd ext-messaging

# Install dependencies
npm install

# Build the project
npm run build
```

## Usage

### Basic Usage

```typescript
import { MessageClient } from '@theluckystrike/ext-messaging';

// Create a message client
const client = new MessageClient();

// Send a message from content script to background
await client.send('background', { type: 'GET_DATA' });
```

### Sending Messages

```typescript
import { sendMessage } from '@theluckystrike/ext-messaging';

// Send to background script
const response = await sendMessage({ type: 'FETCH_DATA', payload: { id: 123 } });
```

### Receiving Messages

```typescript
import { onMessage } from '@theluckystrike/ext-messaging';

// Listen for messages
onMessage((message, sender, sendResponse) => {
  if (message.type === 'GET_DATA') {
    sendResponse({ data: 'Hello from background!' });
  }
  return true; // Keep message channel open for async response
});
```

## API Reference

### Functions

| Function | Description |
|----------|-------------|
| `sendMessage(message)` | Send a message to another context |
| `onMessage(callback)` | Register a message listener |
| `MessageClient` | Class for managing message communication |

## Related Packages

This package is part of the Zovo extension utilities collection:

- [ext-messages](https://github.com/theluckystrike/ext-messages) - Message utilities
- [ext-message-bus](https://github.com/theluckystrike/ext-message-bus) - Event bus for messaging
- [ext-advanced-messaging](https://github.com/theluckystrike/ext-advanced-messaging) - Advanced messaging features
- [webext-bridge](https://github.com/theluckystrike/webext-bridge) - Cross-context messaging

## Contributing

Contributions are welcome! Please follow these steps:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/messaging-improvement`
3. **Make** your changes
4. **Test** your changes: `npm test`
5. **Commit** your changes: `git commit -m 'Add new feature'`
6. **Push** to the branch: `git push origin feature/messaging-improvement`
7. **Submit** a Pull Request

### Development Setup

```bash
# Clone the repository
git clone https://github.com/theluckystrike/ext-messaging.git
cd ext-messaging

# Install dependencies
npm install

# Run tests
npm test

# Build
npm run build
```

## Built by Zovo

Part of the [Zovo](https://zovo.one) developer tools family — privacy-first Chrome extensions built by developers, for developers.

## See Also

### Related Zovo Repositories

- [zovo-extension-template](https://github.com/theluckystrike/zovo-extension-template) - Boilerplate for building privacy-first Chrome extensions
- [zovo-types-webext](https://github.com/theluckystrike/zovo-types-webext) - Comprehensive TypeScript type definitions for browser extensions
- [zovo-permissions-scanner](https://github.com/theluckystrike/zovo-permissions-scanner) - Privacy scanner for Chrome extensions
- [zovo-indexer](https://github.com/theluckystrike/zovo-indexer) - Indexing service for Zovo extensions
- [ext-storage-sync](https://github.com/theluckystrike/ext-storage-sync) - Storage sync utilities

### Zovo Chrome Extensions

- [Zovo Tab Manager](https://chrome.google.com/webstore/detail/zovo-tab-manager) - Manage tabs efficiently
- [Zovo Focus](https://chrome.google.com/webstore/detail/zovo-focus) - Block distractions
- [Zovo Permissions Scanner](https://chrome.google.com/webstore/detail/zovo-permissions-scanner) - Check extension privacy grades

Visit [zovo.one](https://zovo.one) for more information.

## License

MIT - [Zovo](https://zovo.one)

---

*Built by developers, for developers. No compromises on privacy.*
