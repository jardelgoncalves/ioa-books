import Image from 'next/image'

import type { Book } from 'interfaces/book'

import * as S from './styles'

export interface CardBookProps {
  book: Book
  onClick?: (book: Book) => void
  disabled?: boolean
}

export const CardBook = ({ book, onClick, disabled }: CardBookProps) => {
  return (
    <S.Box onClick={() => onClick(book)} disabled={disabled}>
      <S.CoverContainer>
        <Image
          objectFit="cover"
          layout="fill"
          src={book.imageUrl || '/image-placeholder.png'}
          alt={book.title}
        />
      </S.CoverContainer>
      <S.Description>
        <S.Title>{book.title}</S.Title>
        <S.Author>{book.authors}</S.Author>
        <S.Info>
          <span>{book.pageCount} paginas</span>
          <span>{book.publisher}</span>
          <span>Publicado em {book.published}</span>
        </S.Info>
      </S.Description>
    </S.Box>
  )
}
