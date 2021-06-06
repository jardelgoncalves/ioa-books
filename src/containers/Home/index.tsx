import { useState } from 'react'

import { Book } from '../../interfaces/book'

import { ListBooks } from '../../components/presentation/ListBooks'
import { useFetchBooks } from '../../hooks/useFetchBooks'
import { Loading } from '../../components/core/Loading'

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
  query: { page, limit },
  pagination,
}: LoginProps) {
  const [currentPage, setCurrentPage] = useState(Number(page || 1))
  const { loading, isFallback } = useFetchBooks(currentPage, limit)

  function handlerPages(newpage: number) {
    setCurrentPage(newpage)
  }

  if (isFallback || loading) {
    return <Loading />
  }

  return (
    <ListBooks
      books={books}
      pagination={{
        page: currentPage,
        totalPages: pagination.totalPages,
        onChangePage: handlerPages,
      }}
    />
  )
}
