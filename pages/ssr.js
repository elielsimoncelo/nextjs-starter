// import delay from "../src/util/delay"

// export async function getServerSideProps() {
//     await delay(5)
//     return {
//         props: {
//             mensagem: 'Fui renderizada para esta requisição!',
//         } 
//     }
// }

// export default function SSRPage({ mensagem }) {
//     return (
//         <h1>{ mensagem }</h1>
//     )
// }

import delay from "../src/util/delay"

export async function getServerSideProps() {
    await delay(5)
    return {
        props: {
            mensagem: 'Fui renderizada para esta requisição!',
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
