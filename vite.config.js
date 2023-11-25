import uni from '@dcloudio/vite-plugin-uni';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { UnifiedViteWeappTailwindcssPlugin as uvtw } from 'weapp-tailwindcss/vite';
import { plugins as postcssPlugins } from './postcss.config';
import { weAppTailwindcssDisabled } from './build/platform.js';
import { ip, port } from './build/http-server';

const pathResolve = dir => {
  return resolve(__dirname, '.', dir);
};

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': pathResolve('src'),
      '@@static':
        process.env.NODE_ENV === 'development' ? `http://${ip}:${port}` : ''
    }
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
