import axios from 'axios'
import { Request } from 'express'
import { NextApiRequest, NextPageContext } from 'next'
import { parseCookies } from 'nookies'
import { BASE_URL, TOKEN_COOKIES } from '../utils/constants'

export const createClientApi = (
  ctx?:
    | Pick<NextPageContext, 'req'>
    | {
        req: NextApiRequest
      }
    | {
        req: Request
      }
    | null
    | undefined,
) => {
  const api = axios.create({
    baseURL: BASE_URL,
  })
  const { [TOKEN_COOKIES]: token } = parseCookies(ctx)
  if (token) {
    api.defaults.headers.Authorization = `Bearer: ${token}`
  }

  return api
}

export const api = createClientApi()
