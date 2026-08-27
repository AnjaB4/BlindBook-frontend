import { useNavigate } from "react-router-dom"

function PromptCard({ prompt, onDelete }) {
    const navigate = useNavigate()

    return (
        <div
            onClick={() => navigate(`/boards/${prompt.boardId}/prompts/${prompt.id}`)}
            className="bg-stone-900 border border-stone-800 rounded-2xl p-5 cursor-pointer transition hover:border-teal-500/70 hover:-translate-y-1 hover:shadow-xl hover:shadow-teal-950/30"
        >
            <div className="flex items-start justify-between gap-4 mb-2">

                <p className="text-xs uppercase tracking-widest text-orange-300">
                    {prompt.createdByUsername}'s prompt
                </p>

                <button
                    onClick={(e) => {
                        e.stopPropagation()
                        onDelete(prompt.id)
                    }}
                    className="text-xs text-stone-500 hover:text-red-400 transition"
                >
                    Delete
                </button>

            </div>

            <div className="flex justify-between gap-6">

                <div className="flex-1">

                    <h2 className="text-xl font-semibold text-stone-100">
                        {prompt.text}
                    </h2>

                    {prompt.note && (
                        <p className="text-stone-400 mt-3">
                            {prompt.note}
                        </p>
                    )}

                    <p className="text-stone-500 text-sm mt-4">
                        {prompt.responseCount} {prompt.responseCount === 1 ? "response" : "responses"}
                    </p>

                </div>

                {prompt.imageUrl && (
                    <img
                        src={prompt.imageUrl}
                        alt="Prompt"
                        className="w-24 h-36 object-cover rounded-xl border border-stone-700 flex-shrink-0"
                    />
                )}

            </div>

        </div>
    )
}

export default PromptCard