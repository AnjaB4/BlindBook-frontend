import { useState } from "react"
import { registerUser } from "../api/authApi"

import { Link } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import Card from "../components/Card"

function RegisterPage() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const data = await registerUser(username, email, password)
            setMessage(`Account created for ${data.username}. You can log in now.`)
        } catch (error) {
            console.log("REGISTER ERROR:", error)
            console.log("BACKEND RESPONSE:", error.response?.data)

            setMessage(
                error.response?.data?.message ||
                "Registration failed.")
        }
    }

    return (
        <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center px-4">
            <Card>
                <h1 className="text-4x1 font-bold mb-2 text-teal-300">Join BlindBook</h1>
                <p className="text-stone-400 mb-8">Create your profile and start building shared book boards</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        id="username"
                        name="username"
                        autoComplete="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <Input
                        id="register-email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        id="register-password"
                        name="password"
                        autoComplete="new-password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit">Create account</Button>
                </form>

                {message && (
                    <p className="mt-5 text-sm text-teal-400">{message}</p>
                )}

                <p className="mt-6 text-sm text-stone-400">
                    Already have an account?{" "}
                    <Link to="/login" className="text-teal-400 hover:text-teal-300 font-medium">
                        Log in
                    </Link>
                </p>

            </Card>
        </div>
    )
}

export default RegisterPage