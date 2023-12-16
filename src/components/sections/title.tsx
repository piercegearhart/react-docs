type props = {
    size: 'sm' | 'lg'
}

const Title: React.FC<props> = ({ size, children }) => {
    return (
        <h1 className={'font-medium mb-4 ' + (size === 'sm' ? 'dark:text-zinc-200 text-2xl' : 'dark:text-zinc-100 text-3xl')}>
            {children}
        </h1>
    )
}

export default Title