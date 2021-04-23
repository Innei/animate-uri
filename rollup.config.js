import { copyFileSync } from 'fs'
import { join } from 'path'

export default {
  input: 'publish/index.js',
  output: {
    file: 'publish/index.umd.js',
    format: 'umd',
    name: 'animateUri',
    sourcemap: true,
  },
  plugins: [
    {
      writeBundle() {
        copyFileSync(
          join('publish', 'index.d.ts'),
          join('publish', 'index.umd.d.ts')
        )
      },
    },
  ],
}
