import React, {Component} from "react"
import "./Header.css"

class MenuItem extends Component {
    render() {
        return (
            <div className="header__menu__item">
                <a className="header__menu__item__link" href={this.props.href}>{this.props.title}</a>
            </div>
        );
    }
}

export default MenuItem;