// Libralies
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Components
// Types

type Props = {
  title: string
  icon?: IconProp
}

const Heading1: React.FC<Props> = (props: Props) => {
  return (
    <div className="mx-3">
      <h1 className="inline font-bold md:text-2xl text-xl border-b-4 border-secondary">
        {props.icon && <FontAwesomeIcon icon={props.icon} className="mr-2" />}
        {props.title}
      </h1>
    </div>
  )
}

export default Heading1
