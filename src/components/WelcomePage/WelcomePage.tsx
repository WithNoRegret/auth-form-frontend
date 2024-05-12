import styles from './styles.module.css';

const WelcomePage = () => {
    return (
        <div className={styles.body}>
            <h1>WelcomePage</h1>
            <a href='/login'>Login</a>
            <br />
            <a href='/register'> Register</a>
        </div>

    )
}

export default WelcomePage;