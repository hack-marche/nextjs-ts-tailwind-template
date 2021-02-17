// Libralies
import dayjs from 'dayjs'
// Components
// Types

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-secondary py-2">
      <div className="w-full container mx-auto flex flex-col items-center">
        <p className="text-white text-xs tracking-wide mt-2">
          Copyright - Naotsugu Someya, {dayjs().format('YYYY')} All Rights
          Reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
