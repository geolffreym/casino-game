import { join } from 'path'
import { rootDir } from '../utils/env'

export const aliasItems = {
  '@src': join(rootDir, '/src'),
  '@public': join(rootDir, '/public'),
  '@pages': join(rootDir, '/src/pages'),
  '@assets': join(rootDir, '/src/assets'),
  '@styles': join(rootDir, '/src/styles'),
  '@state': join(rootDir, '/src/redux'),
  '@components': join(rootDir, '/src/components')
}
