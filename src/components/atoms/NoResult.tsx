// Libralies
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
  title?: string
}

const NoResult: React.FC<Props> = (props: Props) => {
  const title = props.title ? props.title : '検索結果'
  return (
    <div className="flex flex-col justify-center my-5">
      <p className="w-hull text-center text-xl text-gray-600 font-bold mb-4">
        {title}がありません。
      </p>
      <div className="w-hull text-center">
        <FontAwesomeIcon
          icon={['far', 'frown']}
          className="text-gray-600 text-6xl"
        />
      </div>
    </div>
  )
}

export default NoResult
