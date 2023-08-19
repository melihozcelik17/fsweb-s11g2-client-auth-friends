
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div>

            <h1>
                FRIENDS DATABASE
            </h1>
            <Link to="/login">
                <button>
                    LOGIN
                </button></Link>

            <Link to="/FriendList">
                <button>
                    FRIENDLIST
                </button></Link>

            <Link to="/AddFriend">
                <button>
                    ADDFRIEND
                </button></Link>

            <Link to="/Logout">
                <button>
                    LOGOUT
                </button>
            </Link>
        </div>
    )
}

export default Header;