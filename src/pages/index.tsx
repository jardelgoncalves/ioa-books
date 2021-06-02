import { GetStaticProps } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      title: 'Ioa Books | Login',
      backgroundImage: 'bg-people.png',
      backgroundMobileImage: 'bg-mobile-people.png',
    },
  }
}

export { default } from '../containers/Login'
