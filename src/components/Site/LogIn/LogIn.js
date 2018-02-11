import React, {Component} from "react"
import "./LogIn.css"
import {connect} from "react-redux";
import SocialNetworkList from "./SocialNetworkList";

class LogIn extends Component {
    render() {
        return (
            <div className="login">
                <div>
                    <h2>Тебя приветствует Walker!</h2>
                    <p>Используй любую из предложенных социальных сетей, чтобы войти:</p>
                    <SocialNetworkList/>
                    <p>Это откроет для тебя возможность создавать события и получать уведомления о приглашениях на приватные события своих друзей!</p>
                    {/*<Button/>*/}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(LogIn);