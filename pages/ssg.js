import Link from "../src/components/Link"
import delay from "../src/util/delay"

export async function getStaticProps() {
    await delay(1)
    return {
        props: {
            mensagem: 'Fui gerada durante o build!',
        } 
    }
}

export default function SSGPage({ mensagem }) {
    return (
        <di>
            <Link href="/">Ir para a Home</Link>
            <h1>{mensagem}</h1>
        </di>
    )
}
