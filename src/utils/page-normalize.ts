const MAX_PAGE = 1

function convertToMaxInteger(n: string, max: number, valueDefault: number) {
  return Number.isNaN(Number(n))
    ? valueDefault
    : Math.ceil(Math.max(Number(n), max))
}

export function pageNormalize(page: string) {
  const PAGE = convertToMaxInteger(page, MAX_PAGE, 1)

  return { page: PAGE }
}
