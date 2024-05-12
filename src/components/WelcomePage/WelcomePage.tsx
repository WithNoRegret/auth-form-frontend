import styles from './styles.module.css';

const WelcomePage = () => {
    return (
        <div className={styles.body}>
            <h1>WelcomePage</h1>
            <button onClick={() => window.location.href = '/login'}>Login</button>
            <br />
            <button onClick={() => window.location.href = '/register'}>Register</button>
        </div>

    )
}

export default WelcomePage;