import babel from 'rollup-plugin-babel';
import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input : 'src/index.js',
  name : 'ProtVistaSequence',
  sourcemap : true,
  output : {
    file: 'dist/protvista-sequence.js',
    format: 'iife'
  },
  plugins : [
    nodeResolve({jsnext: true}),
    babel({exclude: 'node_modules/**'})
  ]
};