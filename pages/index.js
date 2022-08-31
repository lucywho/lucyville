import prisma from "lib/prisma"
import Link from "next/link"
import { getItems } from "lib/data"

export default function Home({ restaurants, hotels, thingsToDo, festivals }) {
    return (
        <>
            <div className="text-center ">
                <h1 className="mt-10 font-extrabold text-2xl">
                    The best in town
                </h1>

                <div className="flex flex-col md:grid-cols-3">
                    {restaurants.length !== 0 && (
                        <div>
                            <h2 className="mt-10 font-bold">Restaurants</h2>

                            <ol className="mt-4 list-inside list-decimal">
                                {restaurants.map((item, index) => (
                                    <Link href={`/${item.id}`} key={index}>
                                        <a className="block cursor-pointer hover:underline">
                                            {item.name}
                                        </a>
                                    </Link>
                                ))}
                            </ol>
                        </div>
                    )}
                    {hotels.length !== 0 && (
                        <div>
                            <h2 className="mt-10 font-bold">Hotels</h2>

                            <ol className="mt-4 list-inside list-decimal">
                                {hotels.map((item, index) => (
                                    <Link href={`/${item.id}`} key={index}>
                                        <a className="block cursor-pointer hover:underline">
                                            {item.name}
                                        </a>
                                    </Link>
                                ))}
                            </ol>
                        </div>
                    )}
                    {thingsToDo.length !== 0 && (
                        <div>
                            <h2 className="mt-10 font-bold">Things to do</h2>

                            <ol className="mt-4 list-inside list-decimal">
                                {thingsToDo.map((item, index) => (
                                    <Link href={`/${item.id}`} key={index}>
                                        <a className="block cursor-pointer hover:underline">
                                            {item.name}
                                        </a>
                                    </Link>
                                ))}
                            </ol>
                        </div>
                    )}
                    {festivals.length !== 0 && (
                        <div>
                            <h2 className="mt-10 font-bold">Festivals</h2>

                            <ol className="mt-4 list-inside list-decimal">
                                {festivals.map((item, index) => (
                                    <Link href={`/${item.id}`} key={index}>
                                        <a className="block cursor-pointer hover:underline">
                                            {item.name}
                                        </a>
                                    </Link>
                                ))}
                            </ol>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export async function getServerSideProps() {
    const restaurants = await getItems(prisma, "restaurant")
    const hotels = await getItems(prisma, "hotel")
    const thingsToDo = await getItems(prisma, "thing-to-do")
    const festivals = await getItems(prisma, "festival")

    return {
        props: {
            restaurants,
            hotels,
            thingsToDo,
            festivals,
        },
    }
}
