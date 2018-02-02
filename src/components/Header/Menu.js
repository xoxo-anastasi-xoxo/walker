import React, {Component} from "react"
import "./Header.css"
import {connect} from "react-redux";
import MenuItem from "./MenuItem"

class Menu extends Component {
    render() {
        return (
            <div className="header__menu">
                {
                    this.props.list.map((key, index) => <MenuItem index={index} key={index} title={key.name} href={key.href}/>)
                }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    list: state.main_info.main_menu
});

export default connect(mapStateToProps)(Menu);