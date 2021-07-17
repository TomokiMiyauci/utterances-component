import { Parameters } from '@storybook/addons'

export const parameters: Parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  darkMode: {
    stylePreview: true
  }
}

import 'virtual:windi.css'
