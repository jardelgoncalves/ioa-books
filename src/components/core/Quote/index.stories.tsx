import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Quote, QuoteProps } from '.'

export default {
  title: 'UI/Quote',
  component: Quote,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<QuoteProps> = (args) => <Quote {...args} />

export const Primary = Template.bind({})
Primary.args = {
  text: 'The subject of “design thinking” is the rage at business schools, throughout corporations, and increasingly in the popular press—due in large part to the work of IDEO, a leading design firm, and its celebrated CEO, Tim Brown, who uses this book to show how the techniques and strategies of design belong at every level of business.',
}
