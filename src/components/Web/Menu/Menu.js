import React, {Component} from "react"
import "./Menu.css"
import {connect} from "react-redux";
import  MainMenu from "./MainMenu/MainMenu"
import  NotificationMenu from "./NotificationMenu/NotificationMenu"
import  FriendMenu from "./FriendMenu/FriendMenu"

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <MainMenu/>
                {this.props.menuType === 1 && <NotificationMenu/>}
                {this.props.menuType === 2 && <FriendMenu/>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn,
    menuType: state.user.openedMenu
});

export default connect(mapStateToProps)(Menu);