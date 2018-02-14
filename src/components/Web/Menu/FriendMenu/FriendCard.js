import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";

class FriendCard extends Component {
        render() {
            let style_1 = this.props.friend.isActive ? {backgroundImage: "url(\"" + this.props.friend.ava + "\")"} : {};
            let style_2;
            switch (this.props.friend.relationship){
                case 0:

            }

        return (
            <div className="menu__friend__item">
                <div className="menu__friend__item__active"/>
                <div className="menu__friend__item__ava" style={{backgroundImage: "url(\"" + this.props.friend.ava + "\")"}}/>
                <div className="menu__friend__item__info">
                    {this.props.friend.name}
                </div>
                <div className="menu__friend__item__friend"/>
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