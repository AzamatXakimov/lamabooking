import { Link } from "react-router-dom"
import "./Footer.scss"

export const Footer = () => {
    return <>
        <footer className="site-footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-list-box">
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Countries</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Regions</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Cities</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Districts</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Airports</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/hotels">Hotels</Link>
                            </li>
                        </ul>

                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Homes</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Apartments</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Resorts</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Villas</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/hotels">Hostels</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Guest houses</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list-box">
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Unique places to stay</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Reviews</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Unpacked: Travel articles</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Travel communities</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Seasonal and holiday deals</Link>
                            </li>
                        </ul>

                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Car rental</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Flight Finder</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Restaurant reservations</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Travel Agents</Link>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-list-box">
                        <ul className="footer-list">
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Curtomer Service</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Partner Help</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Careers</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Sustainability</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Press center</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Safety Resource Center</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Investor relations</Link>
                            </li>
                            <li className="footer-item">
                                <Link className="footer-link" to="/">Terms & conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p className="footer-desc">
                        Copyright © 2022 Lamabooking.
                    </p>
                </div>
            </div>
        </footer>
    </>
}
