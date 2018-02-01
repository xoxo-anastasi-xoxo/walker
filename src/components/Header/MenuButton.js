import React, {Component} from "react"
import "./Header.css"

class MenuButton extends Component {
    render() {
        return (
            <a href="#" className="header__button">
                <img className="header__button__image" alt="Меню" src="img/menu.svg"/>
            </a>
        );
    }
}

export default MenuButton;