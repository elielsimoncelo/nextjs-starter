import Link from "../src/components/Link"
import delay from "../src/util/delay"

export async function getStaticProps() {
    await delay(5)
    return {
        props: {
            mensagem: 'Fui gerada durante o build!',
        } 
    }
}

export default function SSGPage({ mensagem }) {
    return (
        <di>
            <h1>{mensagem}</h1>
            <Link href="/">Ir para a Home</Link>
        </di>
    )
}
