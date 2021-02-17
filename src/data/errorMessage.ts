import AlertError from '~/types/AlertError'
import ApiResult from '~/types/ApiResult'

const errorMessages: { [key: string]: AlertError } = {
  'not authorize': {
    title: '許可されていない操作です。',
  },
  'user already registered': {
    title: 'すでに登録されているアカウントです。ログインにお進みください。',
  },
  'user not found': {
    title: 'アカウントが登録されていません。新規登録にお進みください。',
  },
  'not confirmed': {
    title: 'アカウントが有効化されていません。',
    description:
      'アカウント登録時に送信されたメールにあるリンクからアカウントを有効化してください。メールを紛失した場合はマイページのリンクからメールの再送信を行ってください。',
  },
  'failed to payment': {
    title: '支払い処理が失敗しました。',
    description: '入力内容をご確認の上、再度お支払いを実行してください。',
  },
  'failed to send mail': {
    title: 'メール送信処理が失敗しました。',
    description:
      'ログインで使用したサービスのアカウントに設定されているメールアドレスをご確認ください。',
  },
  'confirmToken unmatch': {
    title: 'URLが期限切れです。',
  },
  'user deleted': {
    title: 'このアカウントは既に退会済みです。',
  },
  'account locked': {
    title: 'アカウントがロックされました。',
    description: 'ロックを解除する場合は、システム管理者にご連絡ください。',
  },
}

export const getErrorMessage = (key: string): AlertError => {
  const errorMessage = errorMessages[key]
  if (errorMessage) return errorMessage
  return {
    title: '予期せぬエラーが発生しました',
    description: key,
  }
}

export const parseDefaultError = (result: ApiResult<any, any>): AlertError => {
  return {
    title: '予期せぬセラーが発生しました',
    description: result.error,
  }
}
