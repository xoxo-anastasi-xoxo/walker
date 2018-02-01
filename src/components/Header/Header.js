import React, {Component} from "react"
import "./Header.css"
import MenuButton from "./MenuButton";
import Menu from "./Menu";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1 className="header__text">Walker</h1>
                <MenuButton/>
                <Menu/>
            </div>
        );
    }
}

export default Header;
