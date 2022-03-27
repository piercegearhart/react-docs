const Simplecode: React.FC = ({ children }) => {
    return (
        <span className='bg-zinc-200 dark:bg-zinc-700 dark:text-zinc-200 py-1 px-2.5 rounded-md mx-1'>
            <code>
                {children}
            </code>
        </span>
    )
}

export default Simplecode