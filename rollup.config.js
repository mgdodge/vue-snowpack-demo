import vue from 'rollup-plugin-vue';
import multiInput from 'rollup-plugin-multi-input';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from 'rollup-plugin-babel';
import cleaner from 'rollup-plugin-cleaner';

// Minimal rollup config
export default {
  input: ['src/**/*.vue', 'src/**/*.js'],
  output: {
    format: 'esm',
    dir: 'lib',
  },
  external(id) {
    // Vue components must always be processed
    if (/\.vue/.test(id)) return false;
    // Every non-local file must be marked as external - don't include in bundle,
    // let snowpack handle them instead.
    if (!id.startsWith('\0') && !id.startsWith('.') && !id.startsWith('/')) return true;
  },
  plugins: [
    cleaner({
      targets: [
          './lib/'
      ],
      silent: false,
    }),
    multiInput(),
    vue(),
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**' // only transpile our source code
    }),
  ]
}
