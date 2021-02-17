// Types
import ApiResult from '~/types/ApiResult'
import AlertError from '~/types/AlertError'
import AuthUser from '~/types/AuthUser'
// lib
import { getFetch, postFetch } from './fetcher'
// data
import { getErrorMessage } from '~/data/errorMessage'

export type AuthResult = ApiResult<AuthUser, AlertError>
// ユーザー登録
export async function registerUser(authUser: AuthUser): Promise<AuthResult> {
  const result = await postFetch('/auth_api/register', {
    email: authUser.email,
    displayName: authUser.displayName,
  })
  if (result.error)
    return {
      status: result.status,
      error: getErrorMessage(result.error.message),
    }
  return {
    ...result,
  }
}

// ユーザー有効化メール再送信
export async function resendConfirmRegisterMail(): Promise<AuthResult> {
  const result = await postFetch(
    '/user_auth_api/resend_confirm_mail',
    {},
    'PATCH'
  )
  if (result.error)
    return {
      status: result.status,
      error: getErrorMessage(result.error.message),
    }
  return {
    ...result,
  }
}

// ユーザー有効化
export async function confirmRegisterUser(token: string): Promise<any> {
  const result = await postFetch('/user_auth_api/confirm_register', {
    token,
  })
  if (result.error)
    return {
      status: result.status,
      error: getErrorMessage(result.error.message),
    }
  return {
    ...result,
  }
}

// ログイン
export async function loginUser(): Promise<AuthResult> {
  const result = await getFetch('/user_auth_api/login')
  if (result.error)
    return {
      status: result.status,
      error: getErrorMessage(result.error.message),
    }
  return {
    ...result,
  }
}

// 退会
export async function deleteUser(): Promise<AuthResult> {
  const result = await postFetch(
    '/confirmed_user_auth_api/delete_user',
    {},
    'PATCH'
  )
  if (result.error)
    return {
      status: result.status,
      error: getErrorMessage(result.error.message),
    }
  return {
    ...result,
  }
}
