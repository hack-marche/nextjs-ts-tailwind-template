// Libralies
// Components
// Types

const HamburgerMenuIcon: React.FC = () => {
  return (
    <>
      <span className="sr-only">Open main menu</span>
      <svg
        className="h-12 w-12"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </>
  )
}

export default HamburgerMenuIcon
