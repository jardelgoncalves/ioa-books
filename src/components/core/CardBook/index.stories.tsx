/* eslint-disable react/display-name */
import React from 'react'
import { Story, Meta } from '@storybook/react'
import * as nextImage from 'next/image'
import { CardBook, CardBookProps } from './'

Object.defineProperty(nextImage, 'default', {
  configurable: true,
  value: (props) => <img {...props} />,
})

export default {
  title: 'Example/CardBook',
  component: CardBook,
  argTypes: {
    // backgroundColor: { control: 'color' },
  },
} as Meta

const Template: Story<CardBookProps> = (args) => <CardBook {...args} />

export const Primary = Template.bind({})
Primary.args = {
  book: {
    authors: 'Sr. Marcela Pereira',
    title: 'Accusamus ratione',
    description:
      'Repellat quis eos architecto. Nobis earum et eligendi et ut. Quia cupiditate et.\n \rMinima ea incidunt repellat possimus nemo sapiente. Aut est cumque maiores voluptatum rem veniam. Quia aut necessitatibus accusantium est ea quo velit voluptate aliquam. Minus aliquid ut ut qui veniam.',
    pageCount: 1876,
    category: 'Literatura Brasileira',
    imageUrl: 'https://files-books.ioasys.com.br/Book-4.jpg',
    language: 'Inglês',
    isbn10: '4290454152',
    isbn13: '749-4290454152',
    publisher: 'Oliveira LTDA',
    published: 2016,
    id: '60171639faf5de22b804a088',
  },
}
