# Setup:

```shell
npx nuxi@latest init nuxt-unit-test
cd nuxt-unit-test
npm run dev
```

# Testing Setup:

1.  Install the following packages

```shell
npm i --save-dev @nuxt/test-utils vitest @vue/test-utils happy-dom playwright-core
```

2. Add @nuxt/test-utils/module to your nuxt.config file (optional). It adds a Vitest integration to your Nuxt DevTools which supports running your unit tests in development.

```ts
export default defineNuxtConfig({
	modules: ["@nuxt/test-utils/module"],
});
```

3. Create a vitest.config.ts with the following content:

```ts
import { defineConfig } from "vitest/config";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
	plugins: [vue()],
	test: {
		environment: "happy-dom",
	},
});
```

4. Add a new command for test in your package.json

```json
"scripts": {
  "build": "nuxt build",
  "dev": "nuxt dev",
  ...
  "test": "vitest"
},
```

# How to run test:

```shell
npm test
```
