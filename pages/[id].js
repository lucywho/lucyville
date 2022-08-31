import prisma from "lib/prisma"
import { getItem } from "lib/data.js"

export default function Item({ item }) {
    return (
        <div className="text-center">
            <h1 className="mt-10 font-extrabold text-2xl">{item.name}</h1>
            <h2 className="mt-10 font-bold">{item.description}</h2>
            <h2 className="mt-10 font-bold">{item.rating}</h2>
        </div>
    )
}

export async function getServerSideProps({ params }) {
    const item = await getItem(prisma, parseInt(params.id))

    return {
        props: {
            item,
        },
    }
}
