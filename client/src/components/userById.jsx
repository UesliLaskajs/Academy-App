import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserById = () => {
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "",
        belt: false,
        degree: false,
        image: "",
    });
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get(`http://localhost:3000/users/${id}`)
            .then((res) => {
                setUser(res.data);
            })
            .catch((err) => {
                console.log("Error getting user data", err);
            });
    }, [id]);

    const handleEditClick = () => {
        navigate(`/users/edit/${id}`);
    };

    return (
        <>

            <div className="input_section">
                <div className="form_container">
                    <div className="hero_container">
                        <h1>User Name</h1>
                    </div>
                    <div className="input_container_userId">
                        <form>
                            <div className="name_input">
                                <label htmlFor="name">Name:</label>
                                <input
                                    type="text"
                                    id="name"
                                    value={user.name}
                                    readOnly
                                />
                            </div>

                            <div className="email_input">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={user.email}
                                    readOnly
                                />
                            </div>
                            <div className="password_input">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={user.password}
                                    readOnly
                                />
                            </div>
                            <div className="role_input">
                                <label htmlFor="role">Role:</label>
                                <input
                                    type="text"
                                    id="role"
                                    value={user.role}
                                    readOnly
                                />
                            </div>

                            {user.belt && (
                                <div className="belt_input">
                                    <label htmlFor="belt">BetaPlan Belt:</label>
                                    <input
                                        type="checkbox"
                                        id="belt"
                                        checked={user.belt}
                                        readOnly
                                    />
                                </div>
                            )}

                            {user.degree && (
                                <div className="degree_input">
                                    <label htmlFor="degree">Degree:</label>
                                    <input
                                        type="checkbox"
                                        id="degree"
                                        checked={user.degree}
                                        readOnly
                                    />
                                </div>
                            )}

                            <button onClick={handleEditClick}>Go to Edit Page</button>
                        </form>

                        <div className="image_section">
                            <img src={user.image} alt="" />
                        </div>

                    </div>
                </div>
            </div>

        </>
    );
};

export default UserById;
