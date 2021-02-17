// Libralies
import Link from 'next/link'
// Components
// Types

type Props = {
  pageNum: number
  active: boolean
  baseUrl: string
}

const PaginationItem: React.FC<Props> = (props: Props) => {
  if (props.active) {
    return (
      <li>
        <div className="bg-secondary text-white first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-secondary">
          {props.pageNum}
        </div>
      </li>
    )
  }
  const href =
    props.pageNum === 1 ? props.baseUrl : `${props.baseUrl}/${props.pageNum}`
  return (
    <li>
      <Link href={href}>
        <a className="bg-white text-secondary first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-secondary">
          {props.pageNum}
        </a>
      </Link>
    </li>
  )
}

export default PaginationItem
