import { Link } from 'react-router-dom';
import styles from './styles.module.css';

const WelcomePage = () => {
    return (
        <div className={styles.body}>
            <h1>WelcomePage</h1>
            <Link to='/login'>Login</Link>
            <br />
            <Link to='/register'>Register</Link>
        </div>

    )
}

export default WelcomePage;