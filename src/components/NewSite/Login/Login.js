import React, {Component} from 'react'
import "./Login.css"

class Login extends Component {
    componentWillMount() {
        if (window.location.hash !== "") {
            let req = window.location.hash.split('&');
            let token = req[0].split('=')[1];
            let id = req[2].split('=')[1];

            // fetch("http://192.168.1.79:8080/test/hello",{
            //     method: 'GET'
            //     }).then(function(response) {
            //     return response.text();
            //      }).then((value => {console.log(value)}));

            //  let r = 'http://192.168.1.79:8080/users/loginvk'

            let queryString = [
                "integration_id=" + id,
                "integration_type=VK",
                "token=" + token
            ].join('&');

            fetch('http://192.168.1.79:8080/users/loginvk?' + queryString, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then((value => {
                console.log(value)
            }));

            //window.location.href = "/web/account";

        }
    }

    render() {
        let vkHref ="https://oauth.vk.com/authorize?client_id="
            + 6278299 + "&display=popup&redirect_uri="
            + "http://localhost:3000/login"
            + "&scope=offline,friends,photos&response_type=token&v=5.69";

        return (
            <div className="n_login">
                <div className="n_login__main">
                    <div className="mmm"></div>
                    <a className="n_login__main__left" href="/">Walker</a>
                    <div className="n_login__main__right">
                        <div className="n_login__main__right__container">
                            <p className="n_login__main__right__container__text">Вход</p>
                            <a href={vkHref} className="n_login__main__right__container__a">
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