import { useState } from "react"
import { loginUser } from "../api/authApi"
import { saveToken } from "../utils/token"
import { Link, useNavigate } from "react-router-dom"
import Button from "../components/Button"
import Input from "../components/Input"
import Card from "../components/Card"

function LoginPage() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            const data = await loginUser(email, password)
            saveToken(data.token)
            navigate("/boards")
            setMessage(`Welcome, ${data.user.username}!`)
        } catch (error) {
            setMessage("Login failed. Check your email and password")
        }
    }

    return (
        <div className="min-h-screen bg-stone-950 text-stone-100 flex items-center justify-center px-4">
            <Card>
                <h1 className="text-4x1 font-bold mb-2">BlindBook</h1>
                <p className="text-stone-400 mb-8">Log in to see your shared book boards</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        id="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Input
                        id="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button type="submit">Login</Button>

                </form>

                {message && (
                    <p className="mt-5 text-sm text-teal-400">{message}</p>
                )}

                <p className="mt-6 text-sm text-stone-400">
                    Don&apos;t have an account?{" "}
                    <Link to="/register" className="text-teal-400 hover:text-teal-300 font-medium">
                        Create one
                    </Link>
                </p>

            </Card>

        </div>
    )
}

export default LoginPage