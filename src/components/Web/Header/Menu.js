import React, {Component} from "react"
import "./Header.css"

class Menu extends Component {


    render() {
        return (
            <div className="header__menu">
                {
                    this.props.list.map((key, index) => index !== this.props.type && <div className="header__menu__item" key={index}>{key.title}</div> )
                }
            </div>
        );
    }
}

export default Menu;