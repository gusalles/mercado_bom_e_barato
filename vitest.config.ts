import { defineConfig, coverageConfigDefaults } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    globals: true,
    exclude: ['**/node_modules/**', '**/dist/**', '**/build/**', '**/.next/**'],
    coverage: {
      exclude: [
        'next.config.ts',
        '**/theme.ts',
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
