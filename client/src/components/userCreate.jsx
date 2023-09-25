import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const UserCreate = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [image, setImage] = useState('')
    const [role, setRole] = useState('student')
    const [belt, setBelt] = useState(false)
    const [degree, setDegree] = useState(false)

    const [errors, setErrors] = useState([])
    const navigate = useNavigate();

    const eventHandler = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/users/new", {
            name,
            email,
            password,
            image,
            role,
            belt,
            degree
        })
            .then(() => {

                navigate('/users')

            })
            .catch((err) => {
                const errorResponse = err.response.data.errors
                setErrors(errorResponse);
            })
    }

    return (
        <>
            <div className="form_container">
                <div className="hero_section">
                    <h1>Create New Account</h1>
                </div>

                <div className="inputs_container">
                    <form onSubmit={eventHandler}>
                        <div className="name_input">
                            <label htmlFor="name">Name:</label>
                            <input type='text'
                                value={name}
                                placeholder="Enter Name"
                                onChange={(e) => setName(e.target.value)} />
                            {errors.name ?
                                <p>{errors.name.message}</p> : null}

                        </div>
                        <div className="email_input">
                            <label htmlFor="email">Email</label>
                            <input type="email"
                                value={email}
                                placeholder="Enter Email"
                                onChange={(e) => setEmail(e.target.value)} />
                            {errors.email ?
                                <p>{errors.email.message}</p> : null}
                        </div>

                        <div className="password_input">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                value={password}
                                placeholder="Enter Pass"
                                onChange={(e) => setPassword(e.target.value)} />
                            {errors.password ?
                                <p>{errors.password.message}</p> : null}
                        </div>

                        <div className="image_input">
                            <label htmlFor="image">Image</label>
                            <input type="text"
                                value={image}
                                placeholder="Enter image Url"
                                onChange={(e) => setImage(e.target.value)} />
                            {errors.image ?
                                <p>{errors.image.message}</p> : null}
                        </div>

                        <div className="role_input">
                            <label htmlFor="role">Role</label>
                            <select>
                                <option value="student" onChange={(e) => setRole(e.target.value)}>Student</option>
                                <option value="teacher" onChange={(e) => setRole(e.target.value)}>Teacher</option>

                            </select>
                        </div>


                        <div className="belt_input">
                            <label htmlFor="belt">BetaPlan Belt</label>
                            <input type="checkbox"
                                value={belt}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setBelt(true);
                                    }
                                    else {
                                        return belt;
                                    }
                                }} />
                        </div>

                        <div className="degree_input">
                            <label htmlFor="degree">Degree</label>
                            <input type="checkbox"
                                value={degree}
                                onChange={(e) => {
                                    if (e.target.checked) {
                                        setDegree(true);
                                    }
                                    else {
                                        return degree;
                                    }
                                }} />
                        </div>


                        <button>Sign Up</button>
                    </form>
                </div>
            </div>

        </>
    )

}

export default UserCreate;