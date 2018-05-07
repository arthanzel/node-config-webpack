Node Config Webpack Plugin
==========================

Make [node-config](https://github.com/lorenwest/node-config) work with [Webpack](https://webpack.js.org/)!

[![Build Status](https://travis-ci.org/arthanzel/node-config-webpack.svg?branch=master)](https://travis-ci.org/arthanzel/node-config-webpack)

Using Webpack 4?
----------------
You might not need this package.

Webpack 4 comes with better support for complex objects in `DefinePlugin`. Now, in order to expose your config object to packaged scripts, you can use the following code in `webpack.config.js`:

```javascript
plugins: [
    new webpack.DefinePlugin({ CONFIG: JSON.stringify(require("config")) })
]
```

You can use plain old Javascript objects just as well.

```javascript
plugins: [
    new webpack.DefinePlugin(JSON.stringify({ walrusIsHappy: true }))
]
```

Unlike Webpack 3, Webpack 4 won't expose your entire config object if you use this method, unless you reference the top-level object `CONFIG`.

Introduction
------------
Make [node-config](https://github.com/lorenwest/node-config) work with [Webpack](https://webpack.js.org/)!

[Node-config](https://github.com/lorenwest/node-config) takes a bunch of config files and makes them available to your application as a plain ol' Javascript object. This doesn't work with Webpack because the config files need to be read on the server.

So what if you need to configure a client application? Or multiple deployments of a client application? What if you need to point your single-page app to `localhost` when you're developing, but automatically make it point to `https://my-production-server.com` in prod?

You use `config-webpack`, that's what you do.

Usage
-----
    $ npm install config-webpack
    
Add the `ConfigWebpack` plugin to your `webpack.config.js`.

```javascript
const ConfigWebpackPlugin = require("config-webpack");

// some Webpack config

plugins: [
    new ConfigWebpackPlugin()
]
```
   
Refer to your configs in your bundled Javascript via the `CONFIG` global.

```javascript
if (CONFIG.amIAWalrus) {
    console.log(CONFIG.iAmAWalrus);
}
```
    
Objects and arrays work transparently.

```javascript
console.log(CONFIG.walruses[3].name);
```

`config-webpack` uses Webpack's [DefinePlugin](https://webpack.js.org/plugins/define-plugin/) mechanism to perform direct replacement of keys in your JS files with config values. This means that, if your config looks like `{ "numberOfTusks": 2 }`, then every instance of `CONFIG.numberOfTusks` in your code will be directly replaced with the literal `2`.

All of `node-config`'s features, including deployment- and instance-specific files, local files, and environment variables should work with `node-config-webpack`. `node-config-webpack` bundles your config on the machine that builds it. That means if you bundle on a development machine and deploy on a production machine, you'll get the development config.

`config-webpack` is tested with Webpack versions `3.x` and `4.x`.

Configuring
-----------
Specify a custom namespace instead of `CONFIG`:

```javascript
// webpack.config.js
new ConfigWebpackPlugin("myConfig")

// app.js
console.log(myConfig.numberOfTusks);
```
    
Specify a custom object instead of the one `node-config` generates.

    new ConfigWebpackPlugin("myConfig", { numberOfTusks: 3, colorOfTusks: "yellow" })
    
Security
--------
`node-config-webpack` will only inject config values that are used in your application. If a config value isn't referenced anywhere, it won't appear in your bundled sources.

Be careful when referring to any top-level objects, though:

```javascript
if (CONFIG.debug) {
    console.log(CONFIG);
}
```
    
This will expose your *entire* config object, *even if debug is false*.

Immutability
------------
Since Webpack performs direct replacement on your code, the config is immutable. Trying to mutate or assign to the config will result in an exception.
