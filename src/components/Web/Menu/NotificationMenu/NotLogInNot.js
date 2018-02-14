import React, {Component} from "react"
import "../Menu.css"

class NotLogInNot extends Component {
    render() {
        return (
            <div className="menu__not__notlogin">
                <h4 className="menu__not__notlogin__title">Вы вошли как незарегистрированный пользователь!</h4>
                <p className="menu__not__notlogin__text">В этом режиме Вам будут недоступны следующие функции:</p>
                <p className="menu__not__notlogin__text">       ~  создание событий</p>
                <p className="menu__not__notlogin__text">       ~  просмотр приватных событий</p>
                <p className="menu__not__notlogin__text">Для получения доступа к полному функционалу приложения <a href="/login">войдите</a></p>
            </div>
        );
    }
}

export default NotLogInNot;