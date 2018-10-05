import commonjs from 'rollup-plugin-commonjs';
import nodeResolve from 'rollup-plugin-node-resolve';

module.exports = {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'es',
    sourcemap: true
  },
  plugins: [

    nodeResolve({
      jsnext: true,
      main: true
    }),
    commonjs({
      // non-CommonJS modules will be ignored, but you can also
      // specifically include/exclude files
      include: 'node_modules/**',  // Default: undefined
      // exclude: [ 'node_modules/foo/**', 'node_modules/bar/**' ],  // Default: undefined
      // these values can also be regular expressions
      // include: /node_modules/

      // search for files other than .js files (must already
      // be transpiled by a previous plugin!)
      // extensions: [ '.js', '.coffee' ],  // Default: [ '.js' ]

      // if true then uses of `global` won't be dealt with by this plugin
      // ignoreGlobal: true,  // Default: false

      // if false then skip sourceMap generation for CommonJS modules
      // sourceMap: false,  // Default: true

      // explicitly specify unresolvable named exports
      // (see below for more details)
      // namedExports: { './module.js': ['foo', 'bar' ] },  // Default: undefined

      // sometimes you have to leave require statements
      // unconverted. Pass an array containing the IDs
      // or a `id => boolean` function. Only use this
      // option if you know what you're doing!
      // ignore: [ 'conditional-runtime-dependency' ]
    }),
    // {
    //   name: 'my-example', // this name will show up in warnings and errors
    //   resolveId(importee) {
    //     if (importee === "jss") {
    //       console.log("found!")
    //       return importee;
    //     }
    //     return null; // other ids should be handled as usually
    //   },
    //   load(id) {
    //     if (id === 'jss') {
    //       // the source code for "virtual-module"
    //       return 'import * as jss from "https://unpkg.com/@australis/jss-es@9.8.7-1/lib/index.js"; export default ( jss && jss.default ) || jss;'
    //     }
    //     return null; // other ids should be handled as usually
    //   }
    // },

  ],
  external: [
    '@australis/jss-es/lib.index.js'
  ]
};