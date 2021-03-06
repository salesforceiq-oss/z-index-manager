[![npm][npm-badge]][npm-badge-url]
[npm-badge]: https://img.shields.io/npm/v/z-index-manager.svg
[npm-badge-url]: https://www.npmjs.com/package/z-index-manager

# Z-Index Manager

## What is Z-Index Manager?

Z-Index Manager will easily manage highest and lowest z-indexes on the DOM.

## How to Use

**js**
```javascript
var ZIndexManager = require('z-index-manager').default();

// Returns the new highest Z-Index on the DOM.
ZIndexManager.getHighest();

// Returns the new lowest Z-Index on the DOM.
ZIndexManager.getLowest();
```

## Run Demo Z-Index Manager Application
Run `iqb install` in the root directory to install depenedencies
Run `iqb start` in the root directory to run a demo application with Z-Index Manager.
