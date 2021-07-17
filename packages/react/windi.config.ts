import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  extract: {
    include: ['./lib/**/*.tsx']
  },
  preflight: false,

  theme: {
    screens: {
      sm: '560px'
    }
  }
})
