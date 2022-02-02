import { useState } from 'react'

import type { Book } from 'interfaces/book'

import { CardBook } from 'components/core/CardBook'
import { Button } from 'components/core/Button'
import { Icon } from 'components/core/Icon'
import { Modal } from 'components/core/Modal'

import * as S from './styles'

type PaginationProps = {
  page?: number
  totalPages: number
  onChangePage?: (nextPage: number) => void
}

export interface ListBooksProps {
  books: Book[]
  pagination?: PaginationProps
  loading?: boolean
}

export const ListBooks = ({ books, pagination, loading }: ListBooksProps) => {
  const [book, setBook] = useState<Book | null>(null)
  const hasNext = pagination?.page >= pagination?.totalPages
  const hasPrevious = pagination?.page <= 1

  function handlerPage(pageChanged: number) {
    if (pagination?.onChangePage) {
      pagination.onChangePage(pageChanged)
    }
  }

  return (
    <S.Container>
      <S.List isLoading={loading}>
        {books.map((bookItem) => (
          <CardBook
            key={bookItem.id}
            onClick={() => setBook(bookItem)}
            book={bookItem}
            disabled={loading}
          />
        ))}
      </S.List>
      <S.Pagination>
        <S.PaginationText>
          Página <strong>{pagination?.page}</strong> de{' '}
          <strong>{pagination?.totalPages}</strong>
        </S.PaginationText>
        <Button
          outline
          bg="primary"
          size="2xs"
          disabled={hasPrevious || loading}
          onClick={() => handlerPage(pagination?.page - 1)}
        >
          <Icon name="arrow-left" size="md" />
        </Button>
        <Button
          outline
          bg="primary"
          size="2xs"
          disabled={hasNext || loading}
          onClick={() => handlerPage(pagination?.page + 1)}
        >
          <Icon name="arrow-right" size="md" />
        </Button>
      </S.Pagination>
      <Modal book={book} isOpen={!!book} handleClose={() => setBook(null)} />
    </S.Container>
  )
}
