const FIELDS_TRANSLATED = {
  pageCount: 'Páginas',
  publisher: 'Editora',
  published: 'Publicação',
  language: 'Idioma',
  title: 'Titulo Original',
  isbn10: 'ISBN-10',
  isbn13: 'ISBN-13',
}

export const bookTranslateField = (field: string) => {
  return FIELDS_TRANSLATED[field]
}
