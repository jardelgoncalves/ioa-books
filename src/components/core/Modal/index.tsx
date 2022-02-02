import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import type { Book } from '../../../interfaces/book'

import { Quote } from '../Quote'
import ReactPortal from '../ReactPortal'
import { Icon } from '../Icon'

import { bookTranslateField } from '../../../utils/book-translate-field'
import * as S from './styles'

const infoItem = [
  'pageCount',
  'publisher',
  'published',
  'language',
  'title',
  'isbn10',
  'isbn13',
]

export interface ModalProps {
  book?: Book
  isOpen: boolean
  handleClose: () => void
}

export const Modal = ({ book, isOpen, handleClose }: ModalProps) => {
  const nodeRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null)

    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  return (
    <ReactPortal wrapperId="ioasys-modal">
      <S.Layer ref={nodeRef} isOpen={isOpen}>
        <S.CloseButton onClick={handleClose}>
          <Icon name="close" size="md" />
        </S.CloseButton>
        <S.ModalWrapper>
          <S.ImagePreview>
            <Image
              src={book?.imageUrl || '/image-placeholder.png'}
              alt="text"
              width={380}
              height={512}
              objectFit="cover"
            />
          </S.ImagePreview>
          <S.Content>
            <S.Title>{book?.title}</S.Title>
            <S.Author>{book?.authors}</S.Author>
            <S.ContentInfo>
              <S.Subtitle>Informações</S.Subtitle>
              {book &&
                Object.keys(book)
                  ?.filter((key) => infoItem.includes(key))
                  ?.map((keyItem) => (
                    <S.ContentInfoItem key={keyItem}>
                      <span>{bookTranslateField(keyItem)}</span>
                      <span>{book?.[keyItem]}</span>
                    </S.ContentInfoItem>
                  ))}
            </S.ContentInfo>
            <Quote text={book?.description} />
          </S.Content>
        </S.ModalWrapper>
      </S.Layer>
    </ReactPortal>
  )
}
