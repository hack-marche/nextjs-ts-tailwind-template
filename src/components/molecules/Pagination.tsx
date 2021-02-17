// Libralies
// Components
import PaginationItem from '~/components/atoms/PaginationItem'
// Types

type Props = {
  totalPage: number
  currentPage: number
  baseUrl: string
}

const Pagination: React.FC<Props> = (props: Props) => {
  return (
    <nav className="block">
      <ul className="flex w-full justify-center rounded list-none flex-wrap">
        {[...Array(props.totalPage)].map((_, i) => {
          const pageNum = i + 1
          return (
            <PaginationItem
              key={i}
              pageNum={pageNum}
              baseUrl={props.baseUrl}
              active={pageNum === props.currentPage}
            />
          )
        })}
      </ul>
    </nav>
  )
}

export default Pagination
