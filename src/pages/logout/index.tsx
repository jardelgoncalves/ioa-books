import Router from 'next/router'
import { useEffect } from 'react'
import * as authService from '../../services/auth-service'

export default function Logout() {
  useEffect(() => {
    authService.logout()
    Router.push('/login')
  }, [])

  return null
}
