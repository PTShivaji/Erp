import { Link } from "react-router-dom";

export function Navbar() {
    return (
        <nav>
        <h2><Link to='/dashboard'>Dashboard</Link></h2>
        <h2><Link to='/products'>products Management</Link></h2>
        <h2><Link to='/orders'>Orders Management</Link></h2>
      </nav>
    )
}