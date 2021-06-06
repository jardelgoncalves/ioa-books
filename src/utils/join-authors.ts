export function joinAuthors(authors: string[], lastSeperator = 'e') {
  return authors.join(', ').replace(/(,)(?!.*\1)/g, ` ${lastSeperator}`)
}
