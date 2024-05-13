import { useEffect, useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import WelcomePage from '../WelcomePage/WelcomePage';
import ProfilePage from '../ProfilePage/ProfilePage';
import RegistrationPage from '../RegistrationPage/RegistrationPage';
import ErrorPage from '../ErrorPage/ErrorPage';
import LoginPage from '../LoginPage/LoginPage';
import styles from './styles.module.css';
const AuthWidget = () => {
    const BASE_API_URL = import.meta.env.VITE_BASE_API_URL;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [token, setToken] = useState<string | null>(localStorage.getItem('token') || '');
    useEffect(() => {
        fetch(`${BASE_API_URL}/check-token`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`
            }
        })
            .then(res => {
                if (res.ok) {
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                }
            });
    }, [token, BASE_API_URL]);

    const router = createBrowserRouter([
        {
            path: '/',
            element: isLoggedIn ? <ProfilePage setIsLoggedIn={setIsLoggedIn} /> : <WelcomePage />,
        },
        {
            path: '/login',
            element: isLoggedIn ? <ProfilePage setIsLoggedIn={setIsLoggedIn} /> : <LoginPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} setToken={setToken} />,
        },
        {
            path: '/register',
            element: isLoggedIn ? <ProfilePage setIsLoggedIn={setIsLoggedIn} /> : <RegistrationPage />,
        },
        {
            path: '*',
            element: <ErrorPage />,
        }
    ])

    return (
        <div className={styles.body}>
            <RouterProvider router={router} />
        </div>
    )
};

export default AuthWidget;