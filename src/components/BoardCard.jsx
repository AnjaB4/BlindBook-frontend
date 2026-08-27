import { useNavigate } from "react-router-dom"
import Button from "./Button"


function BoardCard({ board }) {
    const navigate = useNavigate()

    return (
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5 mb-4 hover:border-teal-500/60 transition">
            <div className="flex items-center justify-between gap-4">
                <div>
                    <p className="text-xs uppercase tracking-widest text-emerald-600 mb-1">
                        Shared board
                    </p>

                    <h2 className="text-xl font-semibold text-stone-100">
                        {board.otherUsername}
                    </h2>

                    <p className="text-stone-500 text-sm mt-2">
                        Created: {board.createdAt}
                    </p>
                </div>

                <Button variant="secondary" onClick={() => navigate(`/boards/${board.id}`)}>
                    Open
                </Button>
            </div>
        </div>
    )
}

export default BoardCard