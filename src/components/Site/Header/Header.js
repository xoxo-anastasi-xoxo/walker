import React, {Component} from "react"
import "./Header.css"
import MenuButton from "./MenuButton";
import Menu from "./Menu";
import Logo from "./Logo";
import Language from "./Language";
import Button from "./Button";
import Avatar from "./Avatar";
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="header">
                    <a href="/" className="header-main">
                        <Logo/>
                        <h1 className="header-main__text">Walker</h1>
                    </a>
                    <div className="header-main">
                        <Button href="/web" title="Web"/>
                        {this.props.flag ? <Avatar/> : <Button href="/login" title="Войти"/>}
                        <MenuButton/>
                        <Menu/>
                        <Language/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(Header);