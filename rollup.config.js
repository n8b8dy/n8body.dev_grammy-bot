import typescript from '@rollup/plugin-typescript'
import { typescriptPaths } from 'rollup-plugin-typescript-paths'

export default {
  plugins: [typescript(), typescriptPaths()],
  input: 'src/bot.ts',
  output: {
    file: `build/bot.js`,
    format: 'es',
  },
}
