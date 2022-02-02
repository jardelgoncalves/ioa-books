import { useEffect, useState } from 'react'

export const usePagination = (page: number) => {
  const [currentPage, setCurrentPage] = useState(page || 1)

  useEffect(() => {
    setCurrentPage(page)
  }, [page])

  return {
    page: currentPage,
    handlePage: (page: number) => setCurrentPage(page),
  }
}
