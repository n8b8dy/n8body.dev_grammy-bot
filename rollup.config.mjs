import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

export default {
  plugins: [commonjs(), typescript(), typescriptPaths()],
  input: 'src/bot.ts',
  output: {
    file: `dist/bot.cjs`,
    format: 'cjs',
  },
}
