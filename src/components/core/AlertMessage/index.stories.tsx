import React from 'react'
import { Story, Meta } from '@storybook/react'

import { AlertMessage, AlertMessageProps } from '.'

export default {
  title: 'Example/AlertMessage',
  component: AlertMessage,
  argTypes: {},
} as Meta

const Template: Story<AlertMessageProps> = (args) => <AlertMessage {...args} />

export const Primary = Template.bind({})

Primary.args = {
  message: 'Email e/ou senha incorretos.',
}
