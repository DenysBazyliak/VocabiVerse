// Types
type SectionElementProps = {
    name: string,
    gradient: string
}
const SectionElement = ({name, gradient}:SectionElementProps) => {
    return (
        <div className={`section ${gradient}`}>
            {name}
        </div>
    )
}

export default SectionElement