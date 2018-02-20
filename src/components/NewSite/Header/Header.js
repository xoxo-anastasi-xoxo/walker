import React, {Component} from "react"
import "./Header.css"
import {connect} from "react-redux";

class Header extends Component {
    render() {
        return (
                <div id="p0" className="n_header">
                    <div className="n_header__top">
                        <a href="/" className="n_header__top__title">
                                Walker
                        </a>
                        <a href="/login" className="n_header__top__button">Попробовать</a>
                    </div>
                    <div className="n_header__bottom">
                        <div className="n_header__bottom__title">Explore the&nbsp;new&nbsp;way to&nbsp;create&nbsp;events</div>
                        <div className="n_header__bottom__text"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</div>
                    </div>

                    <a className="scrollto n_header__button" href="#p1"></a>
                </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(Header);