import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { TOKEN_COOKIES } from 'utils/constants'
import { createClientApi } from 'services/api'
import { joinAuthors } from 'utils/join-authors'
import { pageNormalize } from 'utils/page-normalize'
import * as authService from 'services/auth-service'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { query } = ctx

  const { page } = pageNormalize(query.page as string)

  const { [TOKEN_COOKIES]: token } = parseCookies(ctx)
  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
      props: {},
    }
  }

  const fetchBooksPerPage = async (page: number) => {
    const api = createClientApi(ctx)
    return api.get('/books', {
      params: {
        page,
        amount: 12,
      },
    })
  }

  try {
    const { data: books } = await authService.refreshToken(
      () => fetchBooksPerPage(page),
      ctx,
    )

    const pagination = {
      page,
      totalPages: Math.ceil(books.totalPages),
    }

    return {
      props: {
        title: 'Ioa Books',
        backgroundImage: 'bg-color.svg',
        headerVisible: true,
        books: books.data.map((book) => ({
          ...book,
          authors: joinAuthors(book.authors, 'e'),
        })),
        pagination,
        query: {
          page,
        },
      },
    }
  } catch (error) {
    return {
      redirect: {
        destination: '/logout',
        permanent: false,
      },
    }
  }
}

export { default } from '../containers/Home'
