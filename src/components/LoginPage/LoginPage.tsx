import React from 'react'
import { Link } from 'react-router-dom';

interface LoginPageProps {
    isLoggedIn: boolean;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    setToken: React.Dispatch<React.SetStateAction<string | null>>;
}

const LoginPage = ({ setToken }: LoginPageProps) => {
    const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const email = event.currentTarget.email.value;
        const password = event.currentTarget.password.value;

        fetch(`${BASE_API_URL}/login`, {
            method: 'POST',
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        setToken(data.token);
                    })
                }
            })
    }

    return (
        <div>
            <h1>Login Page</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <button type="submit">Login</button>
            </form>
            <p>Not a user?</p>
            <Link to='/register'>Register</Link>
        </div>

    )
}

export default LoginPage