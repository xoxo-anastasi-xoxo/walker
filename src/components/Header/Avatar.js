import React, {Component} from "react"
import "./Header.css"

class Avatar extends Component {
    render() {
        // Нужна будет верная картинка и верная ссылка
        return (
            <a href="/" className="header__avatar">
                <img className="header__avatar__img" alt="Анастаси" src="img/Anastasi.jpg"/>
            </a>
        );
    }
}

export default Avatar;