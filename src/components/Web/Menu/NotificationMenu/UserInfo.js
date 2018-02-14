import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";

class UserInfo extends Component {
    render() {
        return (
            <div className="menu__not__user-info">
                <div  className="menu__not__user-info__ava" style={{backgroundImage: "url(\"" + this.props.ava + "\")"}}></div>
                <div className="menu__not__user-info__container">
                    <p className="menu__not__user-info__text">{this.props.name}</p>
                    <p className="menu__not__user-info__text">{"id: " + this.props.id}</p>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    id: state.user.userId,
    name: state.user.userName,
    ava: state.user.userAva
});

export default connect(mapStateToProps)(UserInfo);