import { useState } from 'react'

import { Book } from '../../interfaces/book'

import { ListBooks } from '../../components/presentation/ListBooks'
import { useFetchBooks } from '../../hooks/useFetchBooks'

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
  const [currentPage, setCurrentPage] = useState(Number(page || 1))
  const { loading, isFallback } = useFetchBooks(currentPage)

  function handlerPages(newpage: number) {
    setCurrentPage(newpage)
  }

  return (
    <ListBooks
      loading={loading || isFallback}
      books={books}
      pagination={{
        page,
        totalPages: pagination.totalPages,
        onChangePage: handlerPages,
      }}
    />
  )
}
