import AuthWidget from './components/AuthWidget/AuthWidget';
import UsersWidget from './components/UsersWidget/UsersWidget';
import styles from './styles.module.css';
function App() {
  return (

    <div className={styles.app}>
      <AuthWidget />
      <UsersWidget />
    </div>
  )
}

export default App;
