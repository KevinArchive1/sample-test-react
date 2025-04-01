import "./Header.css";
import icon from "../images/icon.jpg"

function Header() {
    return(
        <div className="container"> 
            <div className="element_holder">
                <div className="logo">
                    <img src={icon}></img>
                </div>
                <div className="menu">
                    <li><a>Home</a></li>
                    <li><a>Projects</a></li>
                    <li><a>About Me</a></li>
                </div>
            </div>
        </div>
    );
};

export default Header

