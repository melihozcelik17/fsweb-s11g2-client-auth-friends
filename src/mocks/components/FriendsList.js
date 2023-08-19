import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

function FriendList() {
    const [friends, setFriends] = useState([]);
    const { authInfo } = useContext(AuthContext)

    useEffect(() => {
        axios
            .get("http://localhost:9000/api/friends", {
                headers: {
                    Authorization: authInfo.token
                }
            })
            .then(res => setFriends(res.data))
            .catch(res => console.log(res.data))
    }, [])

    return (
        <div>

            <h1>FRIENDLIST</h1>
            {friends.map(friend => (
                <div key={friend.id}>
                    {friend.name} -
                    {friend.email}
                </div>
            ))}
        </div>

    )
}

export default FriendList;