import { NavLink, Outlet } from "react-router";
import PageTitle from "../../utils/page-title";

export default function Home() {
    return (
        <section>
            <PageTitle title="Building UI" />

            <div className="row">
                <div className="col-3">
                    <SideNavigation />
                </div>

                <div className="col">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

function SideNavigation() {
    return (
        <nav className="nav nav-underline flex-column">
            <div className="nav-item">
                <NavLink className='nav-link' to='/home/first'>First Component</NavLink>
            </div>
            <div className="nav-item">
                <NavLink className='nav-link' to='/home/props'>Component Properties</NavLink>
            </div>
            <div className="nav-item">
                <NavLink className='nav-link' to='/home/list'>Rendering List</NavLink>
            </div>
            <div className="nav-item">
                <NavLink className='nav-link' to='/home/conditional'>Conditional Rendering</NavLink>
            </div>
        </nav>
    )
}