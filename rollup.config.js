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
      include: 'node_modules/**',  // Default: undefined      
    }),
  ]  
};