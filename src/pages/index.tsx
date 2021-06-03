import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Ioa Books',
      backgroundImage: 'bg-color.svg',
    },
  }
}

export { default } from '../containers/Login'
