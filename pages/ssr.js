import delay from "../src/util/delay"
import Link from "../src/components/Link"

export async function getServerSideProps() {
    await delay(1)
    return {
        props: {
            mensagem: 'Fui renderizada para esta requisição!',
        } 
    }
}

export default function SSGPage({ mensagem }) {
    return (
        <di>
            <Link href="/">Ir para a Home</Link>
            <h1>{ mensagem }</h1>
        </di>
    )
}
