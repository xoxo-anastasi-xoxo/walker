import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";

class FriendCard extends Component {
    render() {
        let style_1 = this.props.friend.isActive ? {backgroundImage: "url(\"" + this.props.friend.img + "\")"} : {};
        let style_2 = {};
        switch (this.props.friend.relationship) {
            case 0:
                style_2 = {backgroundImage: "url(\"../../../img/plus.svg\")"};
            case 1:
                style_2.backgroundImage = "url(\"../../../img/plus.svg\")";
            case 2:
                style_2.backgroundImage = "url(\"../../../img/plus.svg\")";
        }

        return (
            <div className="menu__friend__item">
                <div className="menu__friend__item__active"/>
                <div className="menu__friend__item__ava"
                     style={{backgroundImage: "url(\"" + this.props.friend.img + "\")"}}/>
                <div className="menu__friend__item__info">
                    {this.props.friend.name}
                </div>
                <div className="menu__friend__item__friend" style={style_2}/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn,
    menuType: state.user.openedMenu
});

const mapDispatchToProps = dispatch => ({
    openNotMenu: (data) => dispatch({
        type: 'CHANGE_MENU',
        data: data
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendCard);