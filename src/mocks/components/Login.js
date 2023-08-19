
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function Login() {
    const [user, setUser] = useState({
        username: "workintech",
        password: "wecandoit"

    })
    const { login } = useContext(AuthContext)
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.perventDefualt();
        login(user);
    }
    return (
        <h1>
            <form onSubmit={handleSubmit}>
                <label>
                    USERNAME
                    <input type="text" name="username" onChange={handleChange} value={user.username} />
                </label>
                <label>
                    PASSWORD
                    <input type="password" name="password" onChange={handleChange} value={user.password} />
                </label>
                <button type="submit"></button>
            </form>

        </h1>

    )
}

export default Login;