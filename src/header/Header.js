import './Header.css';
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from "react-icons/fa";

function Header() {
    return(
        <nav className="header">
            <div className="logo">
                <h1>Food Plaza</h1>
            </div>
            <div className="services">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div className="icon">
                <ul>
                    <li><a href="#"><FaFacebookSquare /></a></li>
                    <li><a href="#"><FaInstagramSquare /></a></li>
                    <li><a href="#"><FaTwitterSquare /></a></li>
                </ul>
            </div>
        </nav>
        
    )
};

export default Header;