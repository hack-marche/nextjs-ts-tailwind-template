// Libralies
import Link from 'next/link'
import { useDispatch } from 'react-redux'
// Components
import HamburgerMenuIcon from '~/components/atoms/HamburgerIcon'
import LoginButton from '~/components/atoms/LoginButton'
import LoggedInMenu from '~/components/molecules/LoggedInMenu'
// store
import { setMenuModalOpen } from '~/store/commonStore'
// Types

const Header: React.FC = () => {
  const dispatch = useDispatch()
  return (
    <>
      <header className="w-full flex justify-between container mx-auto border-b p-1">
        <Link href="/">
          <a>
            <img src="/logo.png" alt="logo" width="264" height="63" />
          </a>
        </Link>
        <div className="flex items-center">
          <div className="mx-4 hidden md:block">
            <div className="flex-no-wrap md:flex">
              <LoggedInMenu />
              <LoginButton />
            </div>
          </div>
          <button
            className="inline-flex items-center md:hidden justify-center p-2 rounded-md text-gray-600 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            onClick={() => dispatch(setMenuModalOpen(true))}
          >
            <HamburgerMenuIcon />
          </button>
        </div>
      </header>
    </>
  )
}

export default Header
