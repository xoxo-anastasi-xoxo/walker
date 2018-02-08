import React, {Component} from "react"
import "./Face.css"

class Button extends Component {
    render() {
        return (
            <a href={this.props.href} className="face__button">
                <div className="face__button__text">{this.props.title}</div>
            </a>
        );
    }
}

export default Button;