// Libralies
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// Types
import BreadCrumb from '~/types/BreadCrumb'
import BreadCrumbsData from '~/types/BreadCrumbsData'

type Props = {
  data: BreadCrumb
}

const BreadCrumbLink: React.FC<Props> = ({ data }: Props) => {
  return (
    <>
      <Link href={data.path}>
        <a className="flex-initial text-blue-600 hover:underline mx-2">
          {data.title}
        </a>
      </Link>
      <FontAwesomeIcon icon="angle-right" className="text-gray-600" />
    </>
  )
}

const BreadCrumbs: React.FC<BreadCrumbsData> = (props: BreadCrumbsData) => {
  if (!props.breadCrumbs) return null
  return (
    <div className="flex flex-wrap items-center mb-2">
      <BreadCrumbLink data={{ path: '/', title: 'ホーム' }} />
      {props.breadCrumbs.map((breadCrumb, index) => {
        return (
          <BreadCrumbLink
            data={{ path: breadCrumb.path, title: breadCrumb.title }}
            key={index}
          />
        )
      })}
      <span className="flex-initial text-gray-700 ml-2">
        {props.currentTitle}
      </span>
    </div>
  )
}

export default BreadCrumbs
