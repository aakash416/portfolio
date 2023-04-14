import "./Header.css"
import { Link } from 'react-router-dom'
function Header() {


    return (
        <div className='header'>
            <ul >
                <Link to="/" style={{ textDecoration: "none" }}><li>Home</li></Link>
                <Link to="/aboutUs" style={{ textDecoration: "none" }}><li>About US</li></Link>
                <Link to="/techStack" style={{ textDecoration: "none" }}><li>Tech Stack</li></Link>
                <Link to="/projects" style={{ textDecoration: "none" }}><li>Projects</li></Link>
                <Link to="/experience" style={{ textDecoration: "none" }}><li>Experience</li></Link>
                <Link to="/contact" style={{ textDecoration: "none" }}> <li>Contact US</li></Link>
            </ul>
        </div >
    )
}

export default Header