import Image from 'next/image'

import { Quote } from '../Quote'
import { Book } from '../../../interfaces/book'

import * as S from './styles'
import { bookTranslateField } from '../../../utils/book-translate-field'

export interface ModalProps {
  book: Book
}

const infoItem = [
  'pageCount',
  'publisher',
  'published',
  'language',
  'title',
  'isbn10',
  'isbn13',
]

export const Modal = ({ book }: ModalProps) => {
  return (
    <S.Layer>
      <S.ModalWrapper>
        <S.ImagePreview>
          <Image
            src="https://files-books.ioasys.com.br/Book-4.jpg"
            alt="text"
            width={380}
            height={512}
            objectFit="cover"
          />
        </S.ImagePreview>
        <S.Content>
          <S.Title>{book.title}</S.Title>
          <S.Author>{book.authors}</S.Author>
          <S.ContentInfo>
            <S.Subtitle>Informações</S.Subtitle>
            {Object.keys(book)
              .filter((key) => infoItem.includes(key))
              .map((keyItem) => (
                <S.ContentInfoItem key={keyItem}>
                  <span>{bookTranslateField(keyItem)}</span>
                  <span>{book[keyItem]}</span>
                </S.ContentInfoItem>
              ))}
          </S.ContentInfo>
          <Quote text={book.description} />
        </S.Content>
      </S.ModalWrapper>
    </S.Layer>
  )
}
