import React, {Component} from "react"
import "./Menu.css"
import {connect} from "react-redux";

class Notification extends Component {
    render() {
        return (
            <div className="menu__main__notification">
                <div className="menu__main__notification__active"></div>
                <div className="menu__main__notification__logo"></div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(Notification);