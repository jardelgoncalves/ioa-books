import { Header } from '../../components/core/Header'
import { ListBooksInfinites } from '../../components/presentation/ListBooksInfinites'

export default function Login() {
  return (
    <>
      <Header user={{ name: 'John' }} />
      <ListBooksInfinites />
    </>
  )
}
