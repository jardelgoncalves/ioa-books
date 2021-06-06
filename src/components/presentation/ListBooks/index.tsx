import { Book } from '../../../interfaces/book'
import * as S from './styles'
import { CardBook } from '../../core/CardBook/index'
import { Button } from '../../core/Button'
import { Icon } from '../../core/Icon'

type PaginationProps = {
  page?: number
  totalPages: number
  onChangePage?: (nextPage: number) => void
}

export interface ListBooksProps {
  books: Book[]
  pagination?: PaginationProps
}

export const ListBooks = ({ books, pagination }: ListBooksProps) => {
  const hasNext = pagination?.page >= pagination?.totalPages
  const hasPrevious = pagination?.page <= 1

  function handlerPage(pageChanged: number) {
    if (pagination?.onChangePage) {
      pagination.onChangePage(pageChanged)
    }
  }

  return (
    <S.Container>
      <S.List>
        {books.map((book) => (
          <CardBook key={book.id} book={book} />
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
          disabled={hasPrevious}
          onClick={() => handlerPage(pagination?.page - 1)}
        >
          <Icon name="arrow-left" size="md" />
        </Button>
        <Button
          outline
          bg="primary"
          size="2xs"
          disabled={hasNext}
          onClick={() => handlerPage(pagination?.page + 1)}
        >
          <Icon name="arrow-right" size="md" />
        </Button>
      </S.Pagination>
    </S.Container>
  )
}
