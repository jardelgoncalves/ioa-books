import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Loading } from '.'

export default {
  title: 'Example/Loading',
  component: Loading,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story = (args) => <Loading {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Entrar',
}
