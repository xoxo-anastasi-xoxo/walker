import React, {Component} from "react"
import "./Header.css"

class MenuItem extends Component {
    render() {
        let style = this.props.style ? "header__menu__item" + this.props.style : "header__menu__item";
        return (
            <div className={style}>
                <a className="header__menu__item__link" href={this.props.href}>{this.props.title}</a>
            </div>
        );
    }
}

export default MenuItem;