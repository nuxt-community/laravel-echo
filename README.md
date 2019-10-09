# @nuxtjs/laravel-echo

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Laravel Echo for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Setup

1. Add `@nuxtjs/laravel-echo` dependency to your project

```bash
yarn add @nuxtjs/laravel-echo # or npm install @nuxtjs/laravel-echo
```

2. Add `@nuxtjs/laravel-echo` to the `modules` section of `nuxt.config.js`

```js
export default {
  modules: [
    // Simple usage
    '@nuxtjs/laravel-echo',

    // With options
    ['@nuxtjs/laravel-echo', { /* module options */ }]
  ]
}
```

### Using top level options

```js
export default {
  modules: [
    '@nuxtjs/laravel-echo'
  ],
  echo: {
    /* module options */
  }
}
```

## Options

### `authModule`

- Type: `Boolean`
- Default: `false`

Integration with [Auth Module](https://github.com/nuxt-community/auth-module).

### `connectOnLogin`

- Type: `Boolean`
- Default: `false`

Connect the connector on login, if `authModule` is set `true`.

### `disconnectOnLogout`

- Type: `Boolean`
- Default: `false`

Disconnect the connector on logout, if `authModule` is set `true`.

> See all options in [Laravel Echo](https://github.com/laravel/echo).

## Usage

This module inject `$echo` to your project:

```html
<template>
  <div>
    <h1>Orders</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    this.$echo.channel('orders')
      .listen('OrderShipped', (e) => {
          console.log(e.order.name);
      });
  }
}
</script>
```

## Development

1. Clone this repository
2. Install dependencies using `yarn install` or `npm install`
3. Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/laravel-echo/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/laravel-echo

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/laravel-echo.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/laravel-echo

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/laravel-echo.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/laravel-echo

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/laravel-echo.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/laravel-echo

[license-src]: https://img.shields.io/npm/l/@nuxtjs/laravel-echo.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/laravel-echo