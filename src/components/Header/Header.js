import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import { deleteToken } from "../../redux/token/tokenActions";

export const Header = () => {
    const {token} = useSelector((state) => state);
    const dispatch = useDispatch()
    return <>
        <header className="site-header">
            <div className="container">
                <div className="header-top">
                    <Link className="header-link" to="/">
                        lamabooking
                    </Link>
                    
                    <div className="hedaer-btn-box">
                        {token.token ? <button className="header-logout-btn" type="button" onClick={() => {
                            dispatch(deleteToken());
                            localStorage.removeItem("token")
                        }}>Logi out</button> : <>
                            <Link className="header-btn-link" to="/register">Register</Link>
                            <Link className="header-btn-link" to="/login">Login</Link>
                            
                        </>}
                    </div>
                </div>

                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li className="header-nav-item">
                            <NavLink className="header-nav-link" to="/">Stays</NavLink>
                        </li>
                        <li className="header-nav-item">
                            <NavLink className="header-nav-link" to="/flights">Flights</NavLink>
                        </li>
                        <li className="header-nav-item">
                            <NavLink className="header-nav-link" to="/cars">Car rentals</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    </>
}
