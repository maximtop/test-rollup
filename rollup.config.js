import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import polyfills from 'rollup-plugin-node-polyfills';
import json from '@rollup/plugin-json';

module.exports = {
    input: 'index.js',
    output: {
        file: 'dist/index.js',
        format: 'cjs',
    },
    plugins: [
        resolve({ preferBuiltins: false }),
        commonjs({
            include: 'node_modules/**',
        }),
        polyfills(),
        json(),
    ],
};
