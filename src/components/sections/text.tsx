type Props = {
    spacing: boolean
}

const Text: React.FC<Props> = ({ spacing, children }) => {
    return (
        <p className={'dark:text-zinc-300 leading-loose' + (spacing === true && ' mb-4')}>
            {children}
        </p>
    )
}

export default Text