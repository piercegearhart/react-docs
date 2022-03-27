type Props = {
    spacing: boolean;
}

const Text: React.FC<Props> = ({ spacing, children }) => {
    const padding = spacing === true ? 'mb-4 ' : ''
    return (
        <p className={padding + 'dark:text-zinc-300 leading-loose'}>
            {children}
        </p>
    )
}

export default Text