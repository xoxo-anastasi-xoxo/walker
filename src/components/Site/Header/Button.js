import React, {Component} from "react"
import "./Header.css"

class Button extends Component {
    render() {
        return (
            <a href={this.props.href} className="header__button">
                <div className="header__button__text">{this.props.title}</div>
            </a>
        );
    }
}

export default Button;