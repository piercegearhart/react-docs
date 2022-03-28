import parse from 'html-react-parser'

type Props = {
    amount: number
}

const Spacing = ({ amount }: Props) => {
    return (
        <>
           {parse('&nbsp;'.repeat(amount))}
        </>
    )
}

export default Spacing