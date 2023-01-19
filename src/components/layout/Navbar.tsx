import { Link, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <div className='flex h-full overflow-hidden'>
            <aside className="w-1/5 relative left-0" aria-label="Sidebar">
                <div className="fixed w-1/6 h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <ul className="space-y-2">
                        <li>
                            <Link to="/" className="sidebar-link">
                                <img src="./svgs/piediagram.svg" alt="" className="sidebar-icon" />
                                <span className="ml-3">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/home" className="sidebar-link">
                                <img src="./svgs/login.svg" alt="login icon" className="sidebar-icon" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Prihlasit sa</span>
                            </Link>
                        </li>
                        <li>
                            <a href="/login" className="sidebar-link">
                                <img src='./svgs/table.svg' alt="logout icon" className="sidebar-icon" />
                                <span className="flex-1 ml-3 whitespace-nowrap">Odhlasit sa</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            <Outlet />
        </div>
    )
}
