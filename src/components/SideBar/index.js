import { Link, NavLink } from "react-router-dom"
import "./index.scss"
import HeadShot from '../../assets/images/1657836375587 (1).jpg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {} from '@fortawesome/free-solid-svg-icons'
import {faProjectDiagram, faUser, faClockRotateLeft} from "@fortawesome/free-solid-svg-icons"
import {faLinkedin,faGithub,} from '@fortawesome/free-brands-svg-icons'
/*
        <Link className="logo" to='/'>
            <img src = {HeadShot} alt = "logo"/>
        </Link>
*/
const SideBar = () => (
    <div className = 'nav-bar'>   

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faUser} color = "#4d4c4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className = "about-link" to="/about">
                <FontAwesomeIcon icon={faClockRotateLeft} color = "#4d4c4e"/>
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                <FontAwesomeIcon icon={faProjectDiagram} color = "#4d4c4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = 'nonreferrer' href='https://www.linkedin.com/in/john-murphy-4167a81b9'>
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                </a>
            </li>
            <li>
                <a target = "_blank" rel = 'nonreferrer' href='https://www.github.com/jmurphynisen'>
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                </a>
            </li>
        </ul>
    </div>
)
export default SideBar