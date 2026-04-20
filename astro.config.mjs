// @ts-check
import { defineConfig } from 'astro/config';
import github from '@astrojs/github';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    adapter: github(),
    build: {
        format: 'directory'
    }
});
