import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Header } from '.'

export default {
  title: 'Example/Header',
  component: Header,
} as Meta

const Template: Story = (args) => <Header {...args} />

export const Primary = Template.bind({})
Primary.args = {
  user: { name: 'John Doe' },
}
