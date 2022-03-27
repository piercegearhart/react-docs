type Props = {
    theme: string;
}

const Alert: React.FC<Props> = ({ theme, children }) => {
    const themeColors:any = {
        'success': 'bg-emerald-400',
        'error': 'bg-rose-500',
        'info': 'bg-sky-500',
        'warning': 'bg-amber-400',
    }

    return (
        <div className={themeColors[`${theme}`] + ' px-5 py-3 text-center rounded-md mb-16 font-medium'}>
            {children}
        </div>
    )
}

export default Alert