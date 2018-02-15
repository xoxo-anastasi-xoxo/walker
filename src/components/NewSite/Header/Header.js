import React, {Component} from "react"
import "./Header.css"
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return (
                <div className="n_header">
                    <div className="n_header__top">
                        <div className="n_header__top__title">Walker</div>
                        <a href="/login" className="n_header__top__button">Попробовать</a>
                    </div>
                    <div className="n_header__bottom">
                        <div className="n_header__bottom__title">Explore the new way to create events</div>
                        <div className="n_header__bottom__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(Header);