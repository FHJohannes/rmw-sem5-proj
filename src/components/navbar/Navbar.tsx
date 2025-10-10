import { NavLink } from "react-router-dom";
import './navbar.css'

export function Navbar() {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/lessons"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Lessons
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/rules"
                        className={({ isActive }) => (isActive ? "active" : "")}
                    >
                        Rules
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}