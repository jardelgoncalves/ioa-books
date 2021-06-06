import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useFetchBooks = (page: number) => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const pageUrl = router.pathname

    setLoading(true)
    router
      .push(`${pageUrl}?page=${page}`, undefined, {
        shallow: false,
      })
      .then(() => {
        setLoading(false)
      })

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])
  return { isFallback: router.isFallback, loading }
}
