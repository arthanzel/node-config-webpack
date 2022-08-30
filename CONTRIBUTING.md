Contributing to node-config-webpack
===================================

There is one source file, `src/ConfigWebpackPlugin.js`. It is written in ES6 and transpiled using Babel.

**Build:** `npm run build` builds a Node-ready JS file in `dist/ConfigWebpackPlugin.js`.

**Test:** `npm run test` runs tests with whatever webpack version is installed currently. "Client-side" scripts that need to access the config are in the `test-resources` folder. These are bundled by webpack into the `build` folder.

Notes on Webpack versions
-------------------------
This project should support Webpack versions `3.x`, `4.x` and `5.x`. Three commands, `npm run test3`, `npm run test4` and `npm run test5` install respective versions and test them. Travis CI is set up to build and test all versions.
