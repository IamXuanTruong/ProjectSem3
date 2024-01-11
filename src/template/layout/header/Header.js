import './Header.css';
import logo from "../../../images/logo.png";
function Header() {
    return (
        <>
            <div className="header_page">
                <div className="header">
                    <div className="logo">
                        <a href='/'>
                            <img src={logo}></img>
                        </a>
                    </div>
                    <div className="menu">
                        <ul>
                            <li>
                                <a href=""><i class="fa-solid fa-circle-info"></i> Introduce</a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-book"></i> News</a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-circle-question"></i> Support</a>
                            </li>
                            <li>
                                <a href=""><i class="fa-solid fa-magnifying-glass-dollar"></i> Recruitment</a>
                            </li>
                            <li>
                                <a href="/login"><i class="fa-solid fa-user"></i> Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
} export default Header;