import React, {Component} from "react"
import "./Log.css"
import {connect} from "react-redux";
import SocialNetworkList from "./SocialNetworkList";
import Button from "./Button";

class LogIn extends Component {
    render() {
        return (
                <div  className="login">
                    <h2 className="login__title">Тебя приветствует Walker!</h2>
                    <p className="login__text">Используй любую из предложенных социальных сетей, чтобы войти:</p>
                    <SocialNetworkList/>
                    <p className="login__text">Это откроет для тебя возможность создавать события и получать уведомления о приглашениях на приватные события своих друзей!</p>
                    <Button href="/web" title="Войти без регистрации"/>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(LogIn);