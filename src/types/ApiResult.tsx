type ApiResult<T, E> = {
  status: number
  body?: T
  error?: E
}

export default ApiResult
