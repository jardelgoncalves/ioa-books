export interface Book {
  id: string
  authors: string
  title: string
  description: string
  pageCount: number
  language: string
  category: string
  imageUrl?: string
  isbn10: string
  isbn13: string
  publisher: string
  published: number
}
