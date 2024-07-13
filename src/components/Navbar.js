import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { Link as L1 } from 'react-scroll';
const Navbar = () => {
    return (
        <nav className="nav1">
            <input type="checkbox" id="btn" className="menu-checkbox" />
            <label htmlFor="btn" className="icon">
                <FontAwesomeIcon icon={faBars} className='faBars' />
                <FontAwesomeIcon icon={faTimes} className='faTimes' />
            </label>

            <ul className="main-ul">
                <li>
                    <input type="checkbox" id="btn1" className="sub-menu-checkbox" />
                    <label htmlFor="btn1" className="show">Profile +</label>
                    <a href="#"><L1 to="section1" smooth={true} duration={500}>Profile</L1></a>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/rushikesh-borade/">LinkedIn</a></li>
                        <li><a href="https://github.com/themerovingian03/">Github</a></li>
                        <li><a href="https://leetcode.com/u/rishipb19/">Leetcode</a></li>
                    </ul>
                </li>
                <li><Link to="/about">About</Link></li>
                <li><L1 to="section6" smooth={true} duration={500}>Contact</L1></li>
            </ul>
        </nav>
    );
}

export default Navbar;
