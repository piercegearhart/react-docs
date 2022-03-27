type Props = {
    spacing: boolean;
}

const Codeblock: React.FC<Props> = ({ spacing, children }) => {
    const padding = spacing === true ? 'mb-4 ' : ''
    return (
        <pre className={padding + 'bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-100 px-6 py-3 rounded-md'}>
            <code>
                {children}
            </code>
        </pre>
    )
}

export default Codeblock