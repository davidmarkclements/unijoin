# Unijoin

> ESM and CJS support for `path.join` of both file paths and file URLs

## Usage

```js
import join from 'unijoin'
const foo = join(import.meta.url, 'lib', 'foo.js')
const relativeFileUrl = join('./folder', 'file:///a.c')
```

Also works fine in CJS:

```js
const join = require('unijoin')
const relativeFileUrl = join('./folder', 'file:///a.c')
```

## License

MIT