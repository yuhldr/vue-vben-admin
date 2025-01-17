import { presetTypography, presetUno } from 'unocss';
import UnoCSS from 'unocss/vite';
import { type UserConfig } from 'vite';

const commonConfig: UserConfig = {
  server: {
    host: true,
  },

  build: {
    reportCompressedSize: false,
    chunkSizeWarningLimit: 1500,
    rollupOptions: {
      // TODO: Prevent memory overflow
      maxParallelFileOps: 3,
    },
  },
  plugins: [
    UnoCSS({
      exclude: [
        'node_modules',
        'dist',
        '.git',
        '.husky',
        '.vscode',
        '.config',
        '.changeset',
        'public',
      ],
      presets: [presetUno(), presetTypography()],
    }),
  ],
};

export { commonConfig };
