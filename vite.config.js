import uni from '@dcloudio/vite-plugin-uni';
import { defineConfig } from 'vite';
import { UnifiedViteWeappTailwindcssPlugin as uvtw } from 'weapp-tailwindcss/vite';
import { plugins as postcssPlugins } from './postcss.config';
import { weAppTailwindcssDisabled } from './build/platform';
import { getAlias } from './build/getAlias';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: getAlias()
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
    },
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/style/index.scss" as *;`
      }
    }
  }
});
