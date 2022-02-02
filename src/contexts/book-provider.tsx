import { createContext, useState } from 'react'
import { Book } from 'interfaces/book'

interface BookProviderContext {
  book: Book | null
  onSelectBook?: (book: Book) => void
}

type BookProviderProps = {
  children: React.ReactNode
}

export const BookContext = createContext({} as BookProviderContext)
export const BookProvider = ({ children }: BookProviderProps) => {
  const [book, setBook] = useState<Book | null>(null)

  function onSelectBook(bookSelected: Book) {
    setBook(bookSelected)
  }

  return (
    <BookContext.Provider
      value={{
        book,
        onSelectBook,
      }}
    >
      {children}
    </BookContext.Provider>
  )
}
