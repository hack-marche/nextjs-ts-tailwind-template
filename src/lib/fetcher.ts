// Libralies
import { stringify } from 'query-string'
import { fbAuth } from '~/lib/firebase'
// type
import ApiResult from '~/types/ApiResult'

const API_HOST = process.env.NEXT_PUBLIC_API_HOST

const buildUrl = (
  host: string,
  url: string,
  queryParams?: Record<string, string>
): string => {
  if (!queryParams || Object.keys(queryParams).length === 0) {
    return `${host}${url}`
  } else {
    return `${host}${url}?${stringify(queryParams)}`
  }
}

const buildHeaders = async (auth: boolean): Promise<any> => {
  const headers = {
    Accept: 'application/json',
  }
  if (auth) {
    const token = await fbAuth.currentUser.getIdToken()
    headers['Authorization'] = `Bearer ${token}`
  }
  return headers
}

type DefaultApiResult = ApiResult<any, any>

const parseResult = async (r: Response): Promise<DefaultApiResult> => {
  const result: DefaultApiResult = { status: r.status }
  if ([200, 201].includes(result.status)) {
    result.body = await r.json()
  } else if (result.status === 204) {
    result.body = null
  } else {
    result.error = await r.json()
  }
  return result
}

export const getFetch = async (
  url: string,
  queryParams?: Record<string, string>,
  auth = true
): Promise<DefaultApiResult> =>
  fetch(buildUrl(API_HOST, url, queryParams), {
    headers: await buildHeaders(auth),
    method: 'GET',
  })
    .then(async (r) => await parseResult(r))
    .catch(async (err) => {
      console.log(err)
      return {
        status: 500,
        error: err,
      }
    })

export const postFetch = async (
  url: string,
  data: Record<string, string>,
  method = 'POST'
): Promise<DefaultApiResult> =>
  fetch(buildUrl(API_HOST, url), {
    headers: await buildHeaders(true),
    method: method,
    body: Object.keys(data).reduce(
      (o, key) => (o.set(key, data[key]), o),
      new FormData()
    ),
  })
    .then(async (r) => await parseResult(r))
    .catch((err) => {
      console.log(err)
      return {
        status: 500,
        error: err,
      }
    })
