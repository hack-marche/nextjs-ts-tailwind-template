// Libralies
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Components
import LogoutLink from '~/components/atoms/LogoutLink'
// Types
// store
import { useAuth } from '~/store/authStore'

const LoggedInMenu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)
  const menuRef: any = useRef()
  const auth = useAuth()
  useEffect(() => {
    if (auth.uid) {
      openMenu && menuRef.current.focus()
    }
  }, [openMenu])
  if (!auth.uid) return null
  return (
    <>
      <button
        type="button"
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        onClick={() => setOpenMenu(!openMenu)}
      >
        ログイン中
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {openMenu && (
        <div
          className="outline-none absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
          onBlur={() => setTimeout(() => setOpenMenu(false), 300)}
          ref={menuRef}
          tabIndex={1}
        >
          <div className="py-1">
            <Link href="/mypage">
              <a className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 flex items-center">
                <FontAwesomeIcon icon="user" className="mr-2 text-lg" />
                <p>マイページ</p>
              </a>
            </Link>
            <div className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer">
              <LogoutLink />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default LoggedInMenu
