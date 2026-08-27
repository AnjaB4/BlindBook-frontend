function Input({ id, name, type = "text", placeholder, value, onChange, autoComplete }) {
    return (
        <input
            id={id}
            name={name}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            autoComplete={autoComplete}
            className="w-full rounded-xl bg-stone-800 border border-stone-700 px-4 py-3 outline-none focus:border-cyan-700"
            />
    )
}

export default Input