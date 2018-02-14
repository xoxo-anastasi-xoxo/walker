import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";

class Events extends Component {
    handleClick() {
        this.props.openNotMenu(this.props.menuType === 3 ? 0 : 3);
    }

    render() {
        return (
            <div className="menu__main__events" onClick={this.handleClick.bind(this)}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Events);