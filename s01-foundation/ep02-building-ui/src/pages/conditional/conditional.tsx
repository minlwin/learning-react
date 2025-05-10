import { NavLink, Outlet } from "react-router";
import PageTitle from "../../utils/page-title";

export default function ConditionalRendering() {
    return (
        <section>
            <PageTitle title="Conditional Rendering" />

            <div className="row">
                <div className="col-3">
                    <SideMenu />
                </div>
                <div className="col">
                    <Outlet />
                </div>
            </div>
        </section>
    )
}

function SideMenu() {
    return (
        <nav className="nav nav-underline flex-column">
            <div className="nav-item">
                <NavLink to={'/conditional/shortAnd'} className='nav-link'>Short Circut AND</NavLink>
            </div>
            <div className="nav-item">
                <NavLink to={'/conditional/ternary'} className='nav-link'>Ternary Operator</NavLink>
            </div>
            <div className="nav-item">
                <NavLink to={'/conditional/shortOr'} className='nav-link'>Short Circut OR</NavLink>
            </div>
        </nav>
    )
}
