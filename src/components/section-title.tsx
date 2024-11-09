
const SectionTitle = (props: {
    title: string
}) => {
    return (
        <h2 className='left-line pl-4 text-2xl leading-none font-semibold  '>{props?.title}</h2>
    )
}

export default SectionTitle