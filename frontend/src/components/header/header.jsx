import {cs} from "cs-react";
import {NavLink} from "react-router-dom";

export const Header = () => cs(
    () => {
        const isActive = ({ isActive }) =>
            isActive ? "underline underline-offset-4 text-sky-400" : "";

        return (
            <header className="bg-slate-950 text-white py-4 px-6 rounded-b-3xl shadow shadow-slate-900/50 sticky top-0 z-50" id="header">
                <nav>
                    <ul className="flex space-x-4 justify-between">
                        <li><NavLink className={isActive} to="/">Home</NavLink></li>
                        <li><NavLink className={isActive} to="/add-content">Add Content</NavLink></li>
                        <li>
                            <p className="text-2xl font-semibold">Content Management</p>
                        </li>
                        <li><NavLink className={isActive} to="/user-contents">User Contents</NavLink></li>
                        <li><NavLink className={isActive} to="/login">Login</NavLink></li>
                    </ul>
                </nav>
            </header>
        )
    }
)