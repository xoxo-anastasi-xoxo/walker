import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";

class Friends extends Component {
    handleClick() {
        this.props.openNotMenu(this.props.menuType === 2 ? 0 : 2);
    }

    render() {
        return (
            <div className="menu__main__friends" onClick={this.handleClick.bind(this)}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Friends);