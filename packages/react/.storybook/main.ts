import { StorybookConfig, CoreConfig, Options } from '@storybook/core-common'
import { UserConfig } from 'vite'
import { resolve } from 'path'
import { Weaken } from 'utilitypes'
import windicss from 'vite-plugin-windicss'

interface CustomizedCoreConfig extends Weaken<CoreConfig, 'builder'> {
  builder: CoreConfig['builder'] | 'storybook-builder-vite'
}
interface CustomizedStroybookConfig extends Weaken<StorybookConfig, 'core'> {
  core: CustomizedCoreConfig

  viteFinal?: (config: UserConfig, option: Options) => UserConfig
}

const config: CustomizedStroybookConfig = {
  stories: ['../lib/**/*.stories.mdx', '../lib/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    'storybook-dark-mode'
  ],

  core: {
    builder: 'storybook-builder-vite'
  },

  viteFinal: (config) => {
    config.resolve.alias = {
      '@': resolve(__dirname, '..', 'lib'),
      '@shared': resolve(__dirname, '..', '..', '@shared')
    }

    config.plugins = [...config.plugins, windicss()]

    if (process.env.NODE_ENV === 'production') {
      config.build.chunkSizeWarningLimit = 1600
    }

    return config
  }
}

export default config
