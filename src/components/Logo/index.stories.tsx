import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Logo, LogoProps } from './'

export default {
  title: 'Example/Logo',
  component: Logo,
} as Meta

const Template: Story<LogoProps> = (args) => <Logo {...args} />

export const Primary = Template.bind({})
Primary.args = {
  themeColor: 'black',
}
