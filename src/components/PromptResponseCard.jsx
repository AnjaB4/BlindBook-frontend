function PromptResponseCard({ promptResponse, onDelete }) {
    return (
        <div className="bg-stone-900 border border-stone-800 rounded-2xl p-5">
            <div className="flex items-start justify-between gap-4 mb-2">
                <p className="text-xs uppercase tracking-widest text-teal-400">
                    {promptResponse.createdByUsername}
                </p>

                <button
                    onClick={() => onDelete(promptResponse.id)}
                    className="text-xs text-stone-500 hover:text-red-400 transition"
                >
                    Delete
                </button>
            </div>

            <div className="flex justify-between gap-6">
                <div className="flex-1">
                    {promptResponse.bookName && (
                        <h2 className="text-xl font-semibold text-stone-100">
                            {promptResponse.bookName}
                        </h2>
                    )}

                    {promptResponse.text && (
                        <p className="text-stone-300 mt-4">
                            {promptResponse.text}
                        </p>
                    )}

                    {promptResponse.note && (
                        <p className="text-stone-500 mt-3 text-sm">
                            Note: {promptResponse.note}
                        </p>
                    )}
                </div>

                {promptResponse.imageUrl && (
                    <img
                        src={promptResponse.imageUrl}
                        alt={promptResponse.bookName || "Book cover"}
                        className="w-24 h-36 object-cover rounded-xl border border-stone-700 flex-shrink-0"
                    />
                )}
            </div>
        </div>
    )
}

export default PromptResponseCard