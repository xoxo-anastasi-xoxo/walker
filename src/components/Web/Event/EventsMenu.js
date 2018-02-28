import React, {Component} from "react"
import "./Event.css"
import {connect} from "react-redux";

class EventsMenu extends Component {
    render() {
        console.log(this.props.userName);
        return (
            <div className="profile">
                <div className="profile-inner">
                    <div className="profile-inner__top" style={{backgroundImage: 'url("' + this.props.userAva + '")'}}> </div>
                    <div className="profile-inner__user">
                        <p className="profile-inner__user__name">{this.props.userName}</p>
                        <div className="profile-inner__user__ava"
                        style={{backgroundImage: 'url("' + this.props.userAva + '")'}}> </div>
                        </div>
                    <div className="profile-inner__bottom">
                        <div className="profile-inner__bottom__menu">
                            <div  className="profile-inner__bottom__menu__item">Мои</div>
                            <div  className="profile-inner__bottom__menu__item">Будущие</div>
                            <div  className="profile-inner__bottom__menu__item">Прошедшие</div>
                        </div>
                        <div></div>
                    </div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(EventsMenu);