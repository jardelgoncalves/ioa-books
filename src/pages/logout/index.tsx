import Router from 'next/router'
import { destroyCookie } from 'nookies'
import { useEffect } from 'react'
import { TOKEN_COOKIES, USER_COOKIES } from '../../utils/constants'

export default function Logout() {
  useEffect(() => {
    destroyCookie(undefined, TOKEN_COOKIES)
    destroyCookie(undefined, USER_COOKIES)
    Router.push('/login')
  }, [])

  return null
}
