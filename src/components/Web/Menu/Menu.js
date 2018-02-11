import React, {Component} from "react"
import "./Menu.css"
import {connect} from "react-redux";
import  MainMenu from "./MainMenu"

class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <MainMenu/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(Menu);