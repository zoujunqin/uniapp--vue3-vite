import uni from '@dcloudio/vite-plugin-uni';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { UnifiedViteWeappTailwindcssPlugin as uvtw } from 'weapp-tailwindcss/vite';
import { plugins as postcssPlugins } from './postcss.config';
import { weAppTailwindcssDisabled } from './platform';

const pathResolve = dir => {
  return resolve(__dirname, '.', dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  alias: {
    '@': pathResolve('./src')
  },
  plugins: [
    uni(),
    uvtw({
      disabled: weAppTailwindcssDisabled
    })
  ],

  css: {
    postcss: {
      plugins: postcssPlugins
    }
  }
});
