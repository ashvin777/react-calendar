const esbuild = require('esbuild');
const { sassPlugin, postcssModules } = require('esbuild-sass-plugin');

esbuild.build({
  entryPoints: ['./src/index.js'],
  outfile: './dist/index.js',
  bundle: true,
  format: 'cjs',
  minify: true,
  external: ['react', 'react-dom'],
  loader: {
    '.js': 'jsx'
  },
  plugins: [
    sassPlugin({
      transform: postcssModules({})
    })
  ]
});
