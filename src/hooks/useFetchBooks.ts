import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

export const useFetchBooks = (page: number, limit: number) => {
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const pageUrl = router.pathname
    const _limit = Math.min(Math.max(Number(limit || 12), 8), 25)

    router.push(`${pageUrl}?page=${page}&limit=${_limit}`, undefined, {
      shallow: false,
    })

    setLoading(false)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit])
  return { isFallback: router.isFallback, loading }
}
