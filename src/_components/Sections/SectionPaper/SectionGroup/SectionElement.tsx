// Types
type SectionElementProps = {
    name: string,
    gradient: string
}
const SectionElement = ({ name, gradient }: SectionElementProps) => {
    return (
        <div
            className={`${gradient} h-6 w-[100%] mb-4 text-black rounded-3xl flex items-center justify-center`}>
            {name}
        </div>
    );
};

export default SectionElement;