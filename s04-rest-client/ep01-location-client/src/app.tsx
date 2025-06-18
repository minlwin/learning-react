import { NavLink, Outlet } from "react-router";

export default function App() {
    return (
        <>
            <nav className="navbar navbar-expand navbar-dark bg-primary">
                <div className="container">
                    <NavLink to="/" className="navbar-brand">Locations</NavLink>

                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/regions" className="nav-link">Regions</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/states" className="nav-link">States</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>

            <main className="container mt-4">
                <Outlet />
            </main>
        </>
    )
}