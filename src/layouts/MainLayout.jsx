import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import { removeToken } from "../utils/token"


function MainLayout({ children }) {
    const navigate = useNavigate()

    function handleLogout() {
        const confirmed = window.confirm(
            "Are you sure you want to log out?"
        )

        if (!confirmed) {
            return
        }

        removeToken()
        navigate("/login")
    }
    return (
        <div className="min-h-screen bg-stone-950 text-stone-100">
            <header className="border-b border-stone-800 bg-stone-950/80 backdrop-blur">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/boards" className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-2xl bg-teal-500/15 border border-teal-500/40 flex items-center justify-center">
                            <svg
                                viewBox="0 0 24 24"
                                className="w-6 h-6 text-teal-300"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M4 5.5C4 4.7 4.7 4 5.5 4H10c1.1 0 2 .9 2 2v14c0-1.1-.9-2-2-2H5.5C4.7 18 4 17.3 4 16.5v-11Z" />
                                <path d="M20 5.5C20 4.7 19.3 4 18.5 4H14c-1.1 0-2 .9-2 2v14c0-1.1.9-2 2-2h4.5c.8 0 1.5-.7 1.5-1.5v-11Z" />
                            </svg>
                        </div>

                        <div>
                            <h1 className="text-xl font-bold text-teal-300 leading-tight">
                                BlindBook
                            </h1>
                            <p className="text-xs text-stone-500">
                                shared book recommendations
                            </p>
                        </div>
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="text-sm text-stone-400 hover:text-teal-300 transition"
                    >
                        Log out
                    </button>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 py-8">
                {children}
            </main>
        </div>
    )
}

export default MainLayout