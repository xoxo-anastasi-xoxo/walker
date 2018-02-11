import React, {Component} from "react"
import "./Log.css"

class Button extends Component {
    render() {
        return (
            <a href={this.props.href} className="login__button">
                <div className="login__button__text">{this.props.title}</div>
            </a>
        );
    }
}

export default Button;