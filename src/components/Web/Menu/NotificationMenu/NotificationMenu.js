import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";
import NotLogInNot from "./NotLogInNot";
import UserInfo from "./UserInfo";

class NotificationMenu extends Component {
    render() {
        return (
            <div className="menu__not">
                {this.props.flag ? <UserInfo/>: <NotLogInNot/>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(NotificationMenu);