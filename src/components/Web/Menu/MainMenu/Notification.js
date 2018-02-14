import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";

class Notification extends Component {
    handleClick() {
        this.props.openNotMenu(this.props.menuType === 1 ? 0 : 1);
    }

    render() {
        return (
            <div className="menu__main__notification" onClick={this.handleClick.bind(this)}>
                {this.props.isNotified && <div className="menu__main__notification__active"></div>}
                {this.props.flag ? <div className="menu__main__notification__ava"
                                        style={{backgroundImage: "url(\"" + this.props.ava + "\")"}}></div> :
                    <div className="menu__main__notification__logo"></div>}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn,
    menuType: state.user.openedMenu,
    isNotified: state.user.isNotified,
    ava: state.user.userAva
});

const mapDispatchToProps = dispatch => ({
    openNotMenu: (data) => dispatch({
        type: 'CHANGE_MENU',
        data: data
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Notification);