const MAX_PAGE = 1
const MAX_LIMIT = 8

function convertToMaxInteger(n: string, max: number) {
  return Number.isNaN(n) ? 1 : Math.ceil(Math.max(Number(n), max))
}

export function pageNormalize(page: string, limit: string) {
  const PAGE = convertToMaxInteger(page, MAX_PAGE)
  const LIMIT = convertToMaxInteger(limit, MAX_LIMIT)

  return { page: PAGE, limit: LIMIT }
}
