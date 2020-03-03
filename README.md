# Pial [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/pial/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/pial)

Check if a number is a prime number. Extremely fast; complexity: `O(sqrt(n/2))`.

[![NPM Badge](https://nodei.co/npm/pial.png)](https://npmjs.com/package/pial)

## Install

```sh
npm install pial
```

## Usage

```js
const pial = require("pial");

pial(3);
//=> true

pial(8);
//=> false
```

## Tips

Use `mem` to cache the return values.

```js
const mem = require("mem");
const pial = mem(require("pial"));

pial(10);
//=> true

pial(10); // Cached value
//=> true
```

## API

### pial(number)

#### number

Type: `number`

The number to check.
