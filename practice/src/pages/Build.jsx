import { NavLink, Outlet } from 'react-router-dom'
import '../App.css'

export default function Build() {
    return (
        <div>
            <h2 style={{ padding: '10%' }}>Select Option To Get Started!</h2>
            <nav style={{justifyContent: 'center', marginBottom: '5%'}} className="nav-links">
                <NavLink to="/build/web" className="nav-link">Web Development</NavLink>
                <NavLink to="/build/mobile" className="nav-link">Mobile Development</NavLink>
            </nav>
            <Outlet/>
        </div>
    )
}