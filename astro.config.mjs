// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    adapter: '@astrojs/github-pages',
    build: {
        format: 'directory'
    }
});
