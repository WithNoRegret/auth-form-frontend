import { Link } from "react-router-dom"

const RegistrationPage = () => {
    return (
        <div>
            <h1>Registration Page</h1>
            <form>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" required />
                <button type="submit">Register</button>
            </form>
            <p>Already a user?</p>
            <Link to='/login'>Login</Link>
        </div>
    )
}

export default RegistrationPage