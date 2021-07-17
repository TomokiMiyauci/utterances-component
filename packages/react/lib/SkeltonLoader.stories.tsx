import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import SkeltonLoader from '@/SkeltonLoader'

const meta: ComponentMeta<typeof SkeltonLoader> = {
  title: 'SkeltonLoader',
  component: SkeltonLoader
}

const Template: ComponentStory<typeof SkeltonLoader> = (args) => (
  <SkeltonLoader {...args} />
)

const Default = Template.bind({})
export { Default }
export default meta
