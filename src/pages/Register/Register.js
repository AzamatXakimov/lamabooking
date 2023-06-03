import { useDispatch } from "react-redux"
import { addToken } from "../../redux/token/tokenActions"
import { Link, useNavigate } from "react-router-dom"
import { useRef } from "react";
import "./Register.scss"
import { auth } from "../../firebase.config";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
    const registerFirstNameRef = useRef()
    const registerLastNameRef = useRef()
    const registerPhoneRef = useRef()
    const registerEmailRef = useRef()
    const registerPasswordRef = useRef()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const hendelSubmit = () => {
        createUserWithEmailAndPassword(auth, registerEmailRef.current.value, registerPasswordRef.current.value)
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
            <form className="register-form" onSubmit={evt => {
                evt.preventDefault()
                hendelSubmit()
            }}>
                <h2 className="register-title">
                    Register
                </h2>

                {/* <label className="register-label">
                    <strong className="register-label-text">
                        First name
                    </strong>
                    <input className="register-input" type="text" aria-label="Enter your first name" placeholder="First name" ref={registerFirstNameRef} required/>
                </label>
                <label className="register-label">
                    <strong className="register-label-text">
                        Last name
                    </strong>
                    <input className="register-input" type="text" aria-label="Enter your last name" placeholder="Last name" ref={registerLastNameRef} required/>
                </label>
                <label className="register-label">
                    <strong className="register-label-text">
                        Phone
                    </strong>
                    <input className="register-input" type="number" aria-label="Enter your phone number" placeholder="Phone" ref={registerPhoneRef} required/>
                </label> */}
                <label className="register-label">
                    <strong className="register-label-text">
                        Email
                    </strong>
                    <input className="register-input" type="email" aria-label="Enter your email" placeholder="Email" ref={registerEmailRef} required/>
                </label>
                <label className="register-label">
                    <strong className="register-label-text">
                        Password
                    </strong>
                    <input className="register-input" type="password" aria-label="Enter your passowrd" placeholder="Password" ref={registerPasswordRef} required/>
                </label>

                <p className="register-text">
                    Have you got accaunt? <Link className="register-link" to="/login">Login</Link>
                </p>

                <button className="register-btn" type="submit">
                    Submit
                </button>
            </form>
        </div>
    </>
}
