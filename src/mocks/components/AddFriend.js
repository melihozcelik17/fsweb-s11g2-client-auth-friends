import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function AddFriend() {
    const [friend, setFriend] = useState({
        name: "",
        email: "",
        age: ""

    })
    const { authInfo } = useContext(AuthContext)
    const handleChange = (e) => {
        setFriend({ ...friend, [e.target.name]: e.target.value })

    }
    const handleSubmit = (e) => {
        e.perventDefualt();
        const payload = { ...friend, age: Number(friend.age) }
        const config = {
            method: "post",
            url: "http://localhost:9000/api/friends",
            headers: {
                Authorization: authInfo.token,
                "Content-Type": "application/json"
            },
            data: payload
        }
        axios(config)
            .then(res => setFriend(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div>

            <h1>
                ADD FRIEND
            </h1>
            <form onSubmit={handleSubmit}>
                <label>
                    FRIEND NAME
                    <input type="text" name="name" onChange={handleChange} value={friend.name} />
                </label>
                <label>
                    FRIEND EMAİL
                    <input type="email" name="email" onChange={handleChange} value={friend.email} />
                </label>
                <label>
                    AGE
                    <input type="email" name="age" onChange={handleChange} value={friend.age} />
                </label>
                <button type="submit"></button>
            </form>
        </div>

    )
}

export default AddFriend;