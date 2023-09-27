import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("http://localhost:3000/users")
            .then((res) => {
                console.log(res.data);
                setUsers(res.data);
            })
            .catch((err) => {
                console.log("Error getting Users Data", err);
            });
    }, []);

    const deleteUser = (itemId) => {
        axios.delete(`http://localhost:3000/users/delete/${itemId}`)
            .then(() => {
                setUsers((prevUsers) => prevUsers.filter((item) => item._id !== itemId));
            })
            .catch((err) => {
                console.log("Error deleting User", err);
            });
    };

    return (
        <>
            <div className="user_list_container">
                <Link to={'/users/new'}><h1>Create user</h1></Link>
                {users.sort((a,b)=>(a.name.localeCompare(b.name)))  
                    .map((item, index) => (
                        <div key={index} className="user_container">
                            <div className="img_container">
                                <img src={item.image} alt="" />
                            </div>
                            <div className="name_buttons_container">
                                <div className="name_user_list">
                                    <h1>{item.name}</h1>
                                    {item.role === 'teacher' ? <div><h1>Teacher</h1></div> : null}
                                </div>
                                <div className="buttons_user_list">
                                    <div className="button_green">
                                        <button onClick={() => navigate(`/users/${item._id}`)}>View Profile</button>
                                    </div>
                                    <div className="button_red">
                                        <button onClick={() => deleteUser(item._id)}>Delete User</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

export default UserList;
