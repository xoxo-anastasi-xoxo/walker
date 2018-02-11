import React, {Component} from "react"
import "./Header.css"
import {connect} from "react-redux";
import MenuItem from "./MenuItem"

class Menu extends Component {
    render() {
        return (
            <div className="header__menu">
                {this.props.flag || <MenuItem key={-1} title="Войти" href="/login" style="-hidden"/>}
                {
                    this.props.list.map((key, index) => <MenuItem index={index} key={index} title={key.name} href={key.href}/>)
                }
                <MenuItem key={3} title="Web" href="/web" style="-hidden"/>

            </div>
        );
    }
}
const mapStateToProps = state => ({
    list: state.main_info.main_menu,
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(Menu);