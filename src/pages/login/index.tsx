import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { TOKEN_COOKIES } from 'utils/constants'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { [TOKEN_COOKIES]: token } = parseCookies(ctx)
  if (token) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
      props: {},
    }
  }

  return {
    props: {
      title: 'Ioa Books | Login',
      backgroundImage: 'bg-people.png',
      isFullPage: true,
    },
  }
}

export { default } from '../../containers/Login'
