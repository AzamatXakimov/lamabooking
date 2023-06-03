import { collection, addDoc } from "firebase/firestore"
import "./HomeAside.scss"
import { db } from "../../firebase.config"
import { useRef } from "react";
export const HomeAside = () => {
    const subscibePeopleCollectionRef = collection(db, "subscribe_people");

    const emailRef = useRef()

    const hendelSubmit = async () => {
        await addDoc(subscibePeopleCollectionRef, {
            email: emailRef.current.value
        })

        emailRef.current.value = "";
    }
    return <>
        <aside className="save-time">
            <div className="container">
                <h2 className="save-time-title">
                    Save time, save money!
                </h2>
                <p className="save-time-desc">
                    Sign up and we'll send the best deals to you
                </p>

                <form className="save-time-form" onSubmit={evt => {
                    evt.preventDefault()
                    hendelSubmit()
                }}>
                    <input className="save-time-input" type="email" aria-label="Enter your email" placeholder="Your email" ref={emailRef}/>
                    <button className="save-time-btn" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        </aside>    
    </>
}
