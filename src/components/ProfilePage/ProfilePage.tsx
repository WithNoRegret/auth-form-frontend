import { Link } from "react-router-dom"

interface ProfilePageProps {
    setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>
}

const ProfilePage = ({ setIsLoggedIn }: ProfilePageProps) => {
    return (
        <div>
            <h1>ProfilePage</h1>
            <Link to='/' onClick={() => {
                localStorage.removeItem('token');
                setIsLoggedIn(false);
            }}>Home</Link>
        </div>
    )
}

export default ProfilePage