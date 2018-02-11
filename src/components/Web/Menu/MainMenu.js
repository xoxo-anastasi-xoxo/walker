import React, {Component} from "react"
import "./Menu.css"
import {connect} from "react-redux";
import Notification from "./Notification"

class MainMenu extends Component {
    render() {
        return (
            <div className="menu__main">
                <Notification/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(MainMenu);