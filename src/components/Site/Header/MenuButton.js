import React, {Component} from "react"
import "./Header.css"

class MenuButton extends Component {
    render() {
        return (
            <a href="javascript:void(0)" className="header__menu-button">
                <div className="header__menu-button__inner header__menu-button" ></div>
            </a>
        );
    }
}

export default MenuButton;