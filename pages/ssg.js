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
        <h1>{mensagem}</h1>
    )
}
