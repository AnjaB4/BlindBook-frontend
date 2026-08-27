function Button({
                    children,
                    type = "button",
                    variant = "primary",
                    onClick
                }) {

    let classes =
        "font-semibold rounded-xl transition"

    if (variant === "primary") {

        classes +=
            " w-full bg-cyan-800 hover:bg-teal-900 text-white py-3"

    }

    if (variant === "secondary") {

        classes +=
            " text-sm bg-teal-600 hover:bg-teal-500 text-white px-4 py-2"

    }

    return (
        <button
            type={type}
            onClick={onClick}
            className={classes}
        >
            {children}
        </button>
    )
}

export default Button