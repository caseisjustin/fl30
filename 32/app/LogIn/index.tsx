import React, { useState } from 'react'
import { LogInPageWrapper } from './LogIn.style'

const LogIn = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // TODO: Handle login logic here (e.g. call API, auth logic)
        console.log({ email, password })
    }

    return (
        <LogInPageWrapper>
            <form onSubmit={handleSubmit}>
                <h2>Log In</h2>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Login</button>
            </form>
        </LogInPageWrapper>
    )
}

export default LogIn
