import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  label: 'Entrar',
}

export const Outline = Template.bind({})
Outline.args = {
  label: 'ok',
  outline: true,
}
