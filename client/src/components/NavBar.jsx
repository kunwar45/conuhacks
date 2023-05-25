import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './NavBar.css'

export default function NavBar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        MoodVision
      </Link>
      <ul>
        <CustomLink to="/register">Register</CustomLink>
        <CustomLink to="/dashboard">Dashboard</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}