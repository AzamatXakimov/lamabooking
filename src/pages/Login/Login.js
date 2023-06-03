import { Link, useNavigate } from "react-router-dom"
import "./Login.scss"
import { useRef } from "react"
import { useDispatch } from "react-redux";
import {addToken} from "../../redux/token/tokenActions"
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase.config";

export const Login = () => {
    const loginEmailRef = useRef()
    const loginPasswordRef = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hendelSubmit = () => {
        signInWithEmailAndPassword(auth, loginEmailRef.current.value, loginPasswordRef.current.value)
        .then((data) => {
            dispatch(addToken(data.user.accessToken));
            localStorage.setItem("token", data.user.accessToken)
            navigate("/")
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return <>
        <div className="container">
            <form className="login-form" onSubmit={evt => {
                evt.preventDefault()
                hendelSubmit()
            }}>
                <h2 className="login-title">
                    Login
                </h2>

                <label className="login-label">
                    <strong className="login-label-text">
                        Email
                    </strong>
                    <input className="login-input" type="email" aria-label="Enter your email" placeholder="Email" ref={loginEmailRef} required/>
                </label>
                <label className="login-label">
                    <strong className="login-label-text">
                        Password
                    </strong>
                    <input className="login-input" type="password" aria-label="Enter your passowrd" placeholder="Password" ref={loginPasswordRef} required/>
                </label>

                <p className="login-text">
                    Have you not got accaunt? <Link className="login-link" to="/register">Register</Link>
                </p>

                <button className="login-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    </>
}
