import type { Book } from 'interfaces/book'

import { ListBooks } from 'components/presentation/ListBooks'
import { useFetchBooks } from 'hooks/useFetchBooks'
import { usePagination } from 'hooks/usePagination'

interface LoginProps {
  books: Book[]
  query?: {
    page?: number
    limit?: number
  }
  pagination?: {
    page?: number
    totalPages?: number
  }
}

export default function Login({
  books,
  query: { page },
  pagination,
}: LoginProps) {
  const { handlePage, page: currentPage } = usePagination(page || 1)
  const { loading, isFallback } = useFetchBooks(currentPage)

  return (
    <ListBooks
      loading={loading || isFallback}
      books={books}
      pagination={{
        page,
        totalPages: pagination.totalPages,
        onChangePage: handlePage,
      }}
    />
  )
}
