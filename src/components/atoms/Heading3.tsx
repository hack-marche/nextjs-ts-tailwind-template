// Libralies
// Components
// Types

type Props = {
  title: string
}

const Heading3: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <h3 className="inline font-bold lg:text-2xl text-xl border-b-4 border-secondary">
        {props.title}
      </h3>
    </div>
  )
}

export default Heading3
