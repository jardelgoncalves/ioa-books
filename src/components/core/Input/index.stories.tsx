import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Input, InputProps } from './'

export default {
  title: 'UI/Input',
  component: Input,
  argTypes: {},
} as Meta

const Template: Story<InputProps> = (args) => <Input {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Email',
  placeholder: 'test@test.com',
}
