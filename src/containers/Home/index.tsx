import { useContext } from 'react'
import { Header } from '../../components/core/Header'
import { ListBooksInfinites } from '../../components/presentation/ListBooksInfinites'
import { AuthContext } from '../../contexts/auth-provider'

export default function Login() {
  const { user } = useContext(AuthContext)
  return (
    <>
      <Header user={user} />
      <ListBooksInfinites />
    </>
  )
}
