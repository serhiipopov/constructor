import type { Config } from 'prismic-ts-codegen'

const config: Config = {
  output: './types.generated.ts',
  models: {
    files: ['./customtypes/**/index.json', './slices/**/model.json'],
    fetchFromRepository: true,
  },
}

export default config
