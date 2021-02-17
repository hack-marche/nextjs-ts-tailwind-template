export default interface AuthUser {
  uid: string
  email: string
  displayName: string
  confirm: boolean
  apiCheck?: boolean
  idToken?: string
}
