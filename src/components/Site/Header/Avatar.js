import React, {Component} from "react"
import "./Header.css"
import {connect} from "react-redux";

class Avatar extends Component {
    render() {
        // Нужна будет верная картинка и верная ссылка
        return (
            <a href="/web" className="header__avatar">
                <img className="header__avatar__img"  alt="Анастаси" src={this.props.ava}/>
            </a>
        );
    }
}



const mapStateToProps = state => ({
    ava: state.user.userAva
});

export default connect(mapStateToProps)(Avatar);