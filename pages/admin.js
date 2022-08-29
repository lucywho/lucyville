import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import Loading from "components/Loading"

export default function Admin() {
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
            <h1 className="mt-10 font-extrabold text-2xl">Admin</h1>
        </div>
    )
}
