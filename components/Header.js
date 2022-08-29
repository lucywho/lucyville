import Head from "next/head"

export default function Header() {
    return (
        <>
            <Head>
                <title>Lucyville</title>
                <meta name="description" content="review site" />
                <link rel="icon" href="/house.ico" />
            </Head>
            <header className="w-full border-b-2 border-black text-center font-black text-4xl py-10">
                Welcome to Lucyville
            </header>
        </>
    )
}
