import Head from "next/head"

export default function Header() {
    return (
        <>
            <Head>
                <title>Lucyville</title>
                <meta name="description" content="review site" />
                <link rel="icon" href="/house.ico" />
            </Head>
            <header className="w-full border-b-2 border-black text-center font-black  text-4xl py-8">
                <p className="w-full text-center font-black text-4xl">
                    Welcome to Lucyville
                </p>
                <p className="w-full  text-center font-bold italic text-lg">
                    gateway to the beautiful Lucy Valley and Nature Reserve
                </p>
            </header>
        </>
    )
}
