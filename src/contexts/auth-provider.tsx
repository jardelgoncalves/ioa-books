import { createContext, useEffect, useState } from 'react'
import Router from 'next/router'
import { User } from '../interfaces/user'
import * as authSerivce from '../services/auth-service'

interface Auth {
  isAuthenticated: boolean
  user?: User
  signIn: (data: authSerivce.LoginData) => void
  error?: string
  loading?: boolean
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext({} as Auth)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(() => {
    authSerivce.recoveryUser().then((me) => setUser(me))
  }, [])

  async function signIn({ email, password }: authSerivce.LoginData) {
    setError('')
    setLoading(true)
    const result = await authSerivce.signIn({ email, password })
    if (result.success) {
      setUser(result.data)
      Router.push('/')
    } else {
      setError(result.error)
    }
    setLoading(false)
  }

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        error,
        signIn,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
