import { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      title: 'Ioa Books',
      backgroundImage: 'bg-color.svg',
    },
  }
}

export { default } from '../containers/Home'
