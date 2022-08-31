import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useState } from "react"

import Loading from "components/Loading"
import Home from "components/Home"

export default function Admin() {
    const [name, setName] = useState("")
    const [type, setType] = useState("restaurant")
    const [description, setDescription] = useState("")

    const router = useRouter()

    const { data: session, status } = useSession()

    const loading = status === "loading"

    if (loading) {
        return <Loading />
    }

    if (!session) {
        router.push("/")
        return
    }

    if (!session.user.isAdmin) {
        router.push("/")
        return
    }

    return (
        <div className="text-center">
            <h1 className="mt-10 font-extrabold text-2xl">Add a new item</h1>

            <form
                className="mt-10"
                onSubmit={async (e) => {
                    e.preventDefault()
                    await fetch("/api/new", {
                        body: JSON.stringify({
                            name,
                            description,
                            type,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                        method: "POST",
                    })
                    router.reload()
                }}
            >
                <div className="flex-1 mb-5">
                    <div className="flex-1 mb-2">Name (required)</div>
                    <input
                        className="border  border-slate-600 p-1 text-black mb-4 bg-slate-300"
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

                    <div className="flex-1 mb-2">Type</div>

                    <select
                        className="border border-slate-600 mb-5 px-2 py-1 bg-slate-300"
                        onChange={(e) => setType(e.target.value)}
                    >
                        <option value="restaurant">Restaurant</option>
                        <option value="hotel">Hotel</option>
                        <option value="thing-to-do">Thing to do</option>
                        <option value="festival">Festival</option>
                    </select>

                    <div className="flex-1 mb-2">Description</div>
                    <textarea
                        className="border  border-slate-600 p-1 text-black bg-slate-300"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

                <button
                    disabled={name ? false : true}
                    className={`border border-slate-600 px-8 py-2 mt-10 font-bold  ${
                        name
                            ? ""
                            : "cursor-not-allowed text-gray-400 border-gray-400"
                    }`}
                >
                    Add item
                </button>
            </form>
            <Home />
        </div>
    )
}
