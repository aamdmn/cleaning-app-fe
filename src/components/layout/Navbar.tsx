import { Link, Outlet } from 'react-router-dom'
import "./../../css/components/layout/Navbar.css"

export default function Navbar() {
    return (
        <div className='container'>
            <aside className="navbar" aria-label="Navbar">
                <div className="navbar-container">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="link">
                                <img src="./svgs/piediagram.svg" alt="" className="icon" />
                                <span className="text">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="link">
                                <img src="./svgs/login.svg" alt="login icon" className="icon" />
                                <span className="text">Prihlasit sa</span>
                            </Link>
                        </li>
                        <li>
                            <a href="/login" className="link">
                                <img src='./svgs/table.svg' alt="logout icon" className="icon" />
                                <span className="text">Odhlasit sa</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <Outlet />
        </div>
    )
}
