/* 
    build.mjs
    Custom Vite build script for extension files,
    to execute after default build finishes its work.
*/
import { build } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const extScripts = [
    {
        entry: path.resolve(__dirname, 'js/iframe.js'),
        fileName: 'iframe'
    },
    /*
        If later you decide to add a background service worker.
    */
    // {
    //  entry: path.resolve(__dirname, 'src-browser-ext/background-sw.ts'),
    //  fileName: 'background-sw'
    // }
];

extScripts.forEach(async (scr) => {
    await build({
        build: {
            // Weather to add sourcemap or not
            // make it false if not required
            sourcemap: 'inline',
            outDir: './dist',
            lib: {
                ...scr,
                formats: ['es']
            },
            emptyOutDir: false
        },
        configFile: false
    });
});