import parse from 'html-react-parser'

type Props = {
    amount: number;
}

const Spacing = ({ amount }: Props) => {
    const spacing = '&nbsp;'
    return (
        <>
           {parse(spacing.repeat(amount))}
        </>
    )
}

export default Spacing