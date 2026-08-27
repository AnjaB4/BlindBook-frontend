function Toast({ message, type = "success" }) {
    if (!message) {
        return null
    }

    const colorClasses =
        type === "error"
            ? "bg-red-500/10 border-red-500/40 text-red-300"
            : "bg-green-500/10 border-green-500/40 text-green-300"

    return (
        <div className={`mb-4 border rounded-xl px-4 py-3 text-sm ${colorClasses}`}>
            {message}
        </div>
    )
}

export default Toast