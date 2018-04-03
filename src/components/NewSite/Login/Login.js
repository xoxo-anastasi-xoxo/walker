import React, {Component} from 'react'
import "./Login.css"

class Login extends Component {
    render() {
        let vkHref ="https://oauth.vk.com/authorize?client_id="
            + 6278299 + "&display=popup&redirect_uri="
            + "http://localhost:3000/login"
            + "&scope=offline,friends,photos&response_type=token&v=5.69";

        return (
            <div className="n_login">
                <div className="n_login__main">
                    <div className="mmm"> </div>
                    <a className="n_login__main__left" href="/">Walker</a>
                    <div className="n_login__main__right">
                        <div className="n_login__main__right__container">
                            <p className="n_login__main__right__container__text">Вход</p>
                            <a href="/web" className="n_login__main__right__container__a">
                                <div className="n_login__main__right__container__a__vk"> </div>
                            </a>
                            <a href="/web" className="n_login__main__right__container__a">
                                <div className="n_login__main__right__container__a__google"> </div>
                            </a>
                            <a href="/web" className="n_login__main__right__container__a">
                                <div className="n_login__main__right__container__a__facebook"> </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;