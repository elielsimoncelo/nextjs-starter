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
import Link from "../src/components/Link"

export async function getServerSideProps() {
    await delay(2)
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
