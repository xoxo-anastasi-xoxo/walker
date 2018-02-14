import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";
import Notification from "./Notification"
import Events from "./Events"
import Search from "./Search";
import Friends from "./Friends";

class MainMenu extends Component {
    render() {
        let style = this.props.menuType === 0? {borderRadius: "10px"} : {};
        return (
            <div className="menu__main" style={style}>
                <Notification/>
                {this.props.flag && <Friends/>}
                {this.props.flag && <Events/>}
                <Search/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn,
    menuType: state.user.openedMenu
});

export default connect(mapStateToProps)(MainMenu);