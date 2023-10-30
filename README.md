# vite-plugin-inject-console
主要用于向index.html注入打包时间以及package.json里相关Data。

## Install

```bash
# install locally (recommended)
npm install vite-plugin-inject-console -D
yarn add vite-plugin-inject-console -D
```

## Options
```javascript
import { defineConfig } from 'vite'
import vitePluginInjectConsole from 'vite-plugin-inject-console'
const path = require('path')
export default defineConfig({
    plugins: [vitePluginInjectConsole({
        packagePath: path.resolve(__dirname, './package.json'),
        outParams: ['name', 'version', 'author']
    })]
})
```