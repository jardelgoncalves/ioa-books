/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios'
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { User } from 'interfaces/user'
import { api } from 'services/api'
import {
  TOKEN_COOKIES,
  USER_COOKIES,
  MAX_AGE_COOKIES,
  REFRESH_TOKEN_COOKIES,
} from 'utils/constants'

export type LoginData = {
  email: string
  password: string
}

type SignInResponse = {
  success: boolean
  data: User | null
  error: string | null
}

export const signIn = async ({
  email,
  password,
}: LoginData): Promise<SignInResponse> => {
  const result: SignInResponse = { success: false, data: null, error: null }
  try {
    const { data, headers } = await api.post('auth/sign-in', {
      email,
      password,
    })
    result.data = data
    result.success = true

    setCookie(undefined, TOKEN_COOKIES, headers.authorization, {
      maxAge: MAX_AGE_COOKIES,
    })
    setCookie(
      undefined,
      REFRESH_TOKEN_COOKIES,
      JSON.stringify(headers['refresh-token']),
      {
        maxAge: MAX_AGE_COOKIES,
      },
    )
    setCookie(undefined, USER_COOKIES, JSON.stringify(data), {
      maxAge: MAX_AGE_COOKIES,
    })

    api.defaults.headers['Authorization'] = `Bearer ${headers.authorization}`
    api.defaults.headers['refresh-token'] = `${headers['refresh-token']}`
  } catch (error) {
    result.success = false
    result.error = 'Ocorre um error inesperado'
    if (error.response) {
      result.error = error.response.data.errors.message
    }
  }
  return result
}

export const recoveryUser = async (): Promise<User | null> => {
  const { [USER_COOKIES]: user } = parseCookies()
  return user ? (JSON.parse(user) as User) : null
}

export const logout = () => {
  destroyCookie(undefined, USER_COOKIES)
  destroyCookie(undefined, TOKEN_COOKIES)
  destroyCookie(undefined, REFRESH_TOKEN_COOKIES)
}

const renewToken = async (ctx?: any) => {
  const { [REFRESH_TOKEN_COOKIES]: refreshToken } = parseCookies(ctx)
  const { headers } = await api.post('/auth/refresh-token', {
    refreshToken,
  })

  api.defaults.headers['Authorization'] = `Bearer ${headers.authorization}`

  setCookie(undefined, TOKEN_COOKIES, headers.authorization, {
    maxAge: MAX_AGE_COOKIES,
  })

  setCookie(
    undefined,
    REFRESH_TOKEN_COOKIES,
    JSON.stringify(headers['refresh-token	']),
    {
      maxAge: MAX_AGE_COOKIES,
    },
  )
}

export const refreshToken = async (
  fn: () => Promise<AxiosResponse>,
  ctx?: any,
) => {
  try {
    return fn()
  } catch (error) {
    if (error.response) {
      const { [REFRESH_TOKEN_COOKIES]: refreshToken } = parseCookies(ctx)
      if (error.response.status === 401 && refreshToken) {
        await renewToken()
        return fn()
      }
    }

    throw error
  }
}
