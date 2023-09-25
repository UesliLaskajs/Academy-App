import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const UserIdUpdate = () => {
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
        role: "student",
        belt: false,
        degree: false,
        image: "",
    });
    const { id } = useParams();
    const navigate = useNavigate();
    const [existingTeacher,setExistingTeacher]=useState(false)

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

    useEffect(()=>{
        axios.get("http://localhost:3000/users")
        .then((res)=>{
                const users = res.data;
                const teacherExists = users.some(user => user.role === 'teacher');
                console.log(teacherExists)
                setExistingTeacher(teacherExists);
        })
        .catch((err)=>{
            console.log("error getting data",err)
        })
    },[])

    const eventHandler = (e) => {
        e.preventDefault();

        axios
            .patch(`http://localhost:3000/users/edit/${id}`, user)
            .then(() => {
                console.log("Successfully updated");
                navigate("/users");
            })
            .catch((err) => {
                let errorResponse = err.response.data.error;
                setErrors(errorResponse);
            });
    };

    return (
        <>
        <div className="inputs_section">
            <div className="form_container">
                <div className="hero_section">
                    <h1>Update User</h1>
                </div>

                <div className="inputs_container">
                    <form onSubmit={eventHandler}>

                        <div className="name_input">
                            <label htmlFor="name">Name:</label>
                            <input
                                type="text"
                                value={user.name}
                                placeholder="Enter Name"
                                onChange={(e) => setUser({ ...user, name: e.target.value })}
                            />
                            {errors.name ? <p>{errors.name.message}</p> : null}
                        </div>

                        <div className="email_input">
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                value={user.email}
                                placeholder="Enter Email"
                                onChange={(e) => setUser({ ...user, email: e.target.value })}
                            />
                            {errors.email ? <p>{errors.email.message}</p> : null}
                        </div>

                        <div className="password_input">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                value={user.password}
                                placeholder="Enter Password"
                                onChange={(e) => setUser({ ...user, password: e.target.value })}
                            />
                            {errors.password ? <p>{errors.password.message}</p> : null}
                        </div>

                        <div className="image_input">
                            <label htmlFor="image">Image:</label>
                            <input
                                type="text"
                                value={user.image}
                                placeholder="Enter image"
                                onChange={(e) => setUser({ ...user, image: e.target.value })}
                            />
                            {errors.image ? <p>{errors.image.message}</p> : null}
                        </div>

                        <div className="role_input">
                            <label htmlFor="role">Role</label>
                            <select>
                            <option value={user.role} onChange={(e) => setUser({...user,role:e.target.value})}>Student</option>
                            {
                                !existingTeacher ? <option value={user.role} onChange={(e) => setUser({...user,role:e.target.value})}>Teacher</option> : null
                            }
                            

                        </select>
                        </div>

                        <div className="belt_input">
                            <label htmlFor="belt">BetaPlan Belt</label>
                            <input
                                type="checkbox"
                                checked={user.belt}
                                onChange={(e) => setUser({ ...user, belt: e.target.checked })}
                            />
                        </div>

                        <div className="degree_input">
                            <label htmlFor="degree">Degree</label>
                            <input
                                type="checkbox"
                                checked={user.degree}
                                onChange={(e) => setUser({ ...user, degree: e.target.checked })}
                            />
                        </div>
                        <button type="submit">Update User</button>
                    </form>
                </div>
                
            </div>
            <div className="image_section">
                <img src={user.image} alt="" />
            </div>
            </div>



            
        </>
    );
};

export default UserIdUpdate;
