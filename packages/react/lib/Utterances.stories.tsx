import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Utterances from '@/Utterances'

const meta: ComponentMeta<typeof Utterances> = {
  title: 'Utterances',
  component: Utterances,

  args: {
    repo: 'TomokiMiyauci/utterances-component',
    theme: 'github-light',
    issueTerm: 'pathname'
  }
}

const Template: ComponentStory<typeof Utterances> = (args) => (
  <Utterances {...args} />
)

const Default = Template.bind({})
export { Default }
export default meta
