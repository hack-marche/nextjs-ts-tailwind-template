// Libralies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const ComponentSpinner: React.FC = () => {
  return (
    <div className="flex justify-center content-center bg-white opacity-75 z-50">
      <span className="text-secondary opacity-75 top-1/2 my-0 mx-auto block">
        <FontAwesomeIcon
          icon="spinner"
          className="fas fa-circle-notch fa-spin fa-5x"
        />
      </span>
    </div>
  )
}

export default ComponentSpinner
