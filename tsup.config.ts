import { defineConfig } from 'tsup';

export default defineConfig([
  /*
   * Core module configuration
   */
  {
    entry: ['src/index.ts'],
    format: ['cjs', 'esm'],
    dts: true,
    clean: true,
    outDir: 'dist',
    external: [],
    target: 'es2020'
  },
  /*
   * React module configuration  
   */
  {
    entry: ['react/index.ts'],
    format: ['cjs', 'esm'],
    /*
     * Generate React type definitions
     */
    dts: true,
    outDir: 'dist/react',
    external: ['react'],
    target: 'es2020',
    esbuildOptions(options) {
      options.jsx = 'automatic'
    }
  }
]);
