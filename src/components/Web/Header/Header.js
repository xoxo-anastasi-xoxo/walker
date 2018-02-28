import React, {Component} from "react"
import "./Header.css"
import {connect} from "react-redux";
import Menu from "./Menu";
import $ from 'jquery'

class Header extends Component {

    handleClick() {
        this.props.openMenu();

        const step = 180;
        let el = $('#icon');
        let d = el.data('angle') + step;
        el.css("-webkit-transform", "rotate(+" + d + "deg)");
        el.data('angle', d);
    }

    render() {
        console.log(this.props.userName);
        return (
            <div className="header">
                <a href="/" className="header__title">
                    Walker
                </a>
                <div className="header__user" onClick={this.handleClick.bind(this)}>

                    <div className="header__user__ava"
                         style={{backgroundImage: 'url("' + this.props.userAva + '")'}}> </div>
                    <p className="header__user__name">{this.props.userName}</p>
                    <div className="header__user__arrow" id="icon" data-angle="0"> </div>
                </div>
                {this.props.isOpened && <Menu list={this.props.list} type={this.props.menu}/>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userName: state.user.userName,
    userAva: state.user.userAva,
    menu: state.user.menu,
    list: state.user.menuList,
    isOpened: state.user.isOpened
});


const mapDispatchToProps = dispatch => ({
    openMenu: () => dispatch({
        type: 'OPEN_MENU'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);