import React, {Component} from "react"
import "./Header.css"

class Language extends Component {
    render() {
        return (
            <div className="header__language">
                <div className="header__language__img"></div>
                <div className="header__language__name">RU</div>
            </div>
        );
    }
}

export default Language;