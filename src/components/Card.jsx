function Card({ children }) {
    return (
        <div className="w-full max-w-md bg-stone-900 border border-stone-800 rounded-3xl p-8 shadow-2x1">
            {children}
        </div>
    )
}

export default Card