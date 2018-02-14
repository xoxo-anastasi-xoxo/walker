import React, {Component} from "react"
import "../Menu.css"
import {connect} from "react-redux";

class Search extends Component {
    render() {
        // есть еще search
        let plcholder = this.props.menuType === 2 ? "Поиск друзей" : "Поиск по событиям"
        return (
            <form className="menu__main__search" name="test" method="post" action="input1.php">

                    <input className="menu__main__search__input" type="text" placeholder={plcholder} size="40"/>
                <div className="menu__main__search__loupe"></div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn,
    menuType: state.user.openedMenu
});

export default connect(mapStateToProps)(Search);