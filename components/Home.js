import Link from "next/link"

export default function Home() {
    return (
        <Link href="/">
            <button className="m-10 py-2 px-4 text-lg text-emerald-700 border-2 border-emerald-700 hover:text-white hover:bg-emerald-700">
                Home
            </button>
        </Link>
    )
}
