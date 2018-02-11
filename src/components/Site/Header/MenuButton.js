import React, {Component} from "react"
import "./Header.css"

class MenuButton extends Component {
    render() {
        return (
            <a href="javascript:void(0)" className="header__menu-button">
                <div className="header__menu-button__inner" ></div>
            </a>
        );
    }
}

export default MenuButton;