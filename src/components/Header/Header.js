import './Header.css';
import {
    Link
} from "react-router-dom";
import "../../App.css"

// import "../../App.css";

function Header() {
    return (
        <nav className="header navbar navbar-expand-lg head-bg">
            <a class="navbar-brand" href="#">Cyle McGregor</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ml-auto">
                    <li class="nav-item active ml-auto">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item ml-auto">
                        <Link to="/portfolio">Portfolio</Link>
                    </li>
                    <li class="nav-item ml-auto">
                        <Link to="/about">About</Link>
                    </li>
                    <li class="nav-item ml-auto">
                        <a href="https://drive.google.com/file/d/1zxvNA9CwTiKfWFF19qer1e_5-IR6nXC3/view?usp=sharing">Resume</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;