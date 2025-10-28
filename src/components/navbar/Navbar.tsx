import { NavLink } from "react-router-dom";
import styles from './navbar.module.css'

export function Navbar() {
    return (
        <nav className="navbar">
            <h2><NavLink to="/" >Mahjong</NavLink></h2>
            <ul className={styles.navlist}>
                <li>
                    <NavLink to="/" className={({ isActive }) => `${styles.navlink}${isActive ? " active" : ""}`}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/lessons" className={({ isActive }) => `${styles.navlink}${isActive ? " active" : ""}`}>Lessons</NavLink>
                </li>
                <li>
                    <NavLink to="/rules" className={({ isActive }) => `${styles.navlink}${isActive ? " active" : ""}`} >Rules</NavLink>
                </li>
            </ul>
        </nav>
    );
}