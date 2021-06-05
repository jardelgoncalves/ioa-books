import { createContext } from 'react'
import { User } from '../interfaces/user'
import { signIn, LoginData } from '../services/auth-service'

interface Auth {
  token?: string
  isAuthenticated: boolean
  user?: User
  signIn: (data: LoginData) => void
}

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthContext = createContext({} as Auth)
export const AuthProvider = ({ children }: AuthProviderProps) => {
  return (
    <AuthContext.Provider value={{ isAuthenticated: false, signIn }}>
      {children}
    </AuthContext.Provider>
  )
}
