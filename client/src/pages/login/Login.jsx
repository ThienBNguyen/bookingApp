import "./login.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Login = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined
    })
    const { loading, error, dispatch } = useContext(AuthContext)
    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: [e.target.calue] }))
    }
    const handleClick = async e => {
        e.preventDefault()
        dispatch({ type: "LOGIN_START" })

        try {
            const res = await axios.post("/auth/login", credentials)
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data })
        } catch (err) {
            dispatch({ type: "LOGIN_FAILURE", payload: err.response.data })
        }
    }
    return (
        <div className="login">
            <div className="lContainer">
                <input type="text" placeholder="username" id="username" onChange={handleChange} className="lInput" />
                <input type="text" placeholder="password" id="password" onChange={handleChange} className="lInput" />
                <b className="lButton">Login</b>
                {error && <span>{error.message}</span>}

            </div>

        </div>
    );
}

export default Login;
