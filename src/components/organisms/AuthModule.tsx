// Libralies
import { useEffect } from 'react'
import { useRouter } from 'next/router'
// Components
import ComponentSpinner from '~/components/atoms/ComponentSpinner'
// store
import { useAuth } from '~/store/authStore'
// Tlib
import { fbAuth } from '~/lib/firebase'

const AuthModule: React.FC = () => {
  const auth = useAuth()
  const router = useRouter()
  useEffect(() => {
    const f = async () => {
      const fbUser = await fbAuth.currentUser
      if (auth.apiCheck && !fbUser) {
        router.push('/')
      }
    }
    f()
  }, [auth.apiCheck])
  return (
    <div className="mt-10">
      <ComponentSpinner />
    </div>
  )
}

export default AuthModule
