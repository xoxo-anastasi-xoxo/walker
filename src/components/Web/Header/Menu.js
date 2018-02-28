import React, {Component} from "react"
import "./Header.css"
import {connect} from "react-redux";
import $ from "jquery"


class Menu extends Component {

    handleClick(index) {
        this.props.changeMenu(index);

        const step = 180;
        let el = $('#icon');
        let d = el.data('angle') + step;
        el.css("-webkit-transform", "rotate(+" + d + "deg)");
        el.data('angle', d);
    }

    render() {
        return (
            <div className="header__menu">
                {
                    this.props.list.map((key, index) =>
                        index !== this.props.type &&
                        <div className="header__menu__item" key={index}
                             onClick={this.handleClick.bind(this, index)}>{key.title}</div>)
                }
            </div>
        );
    }
}


const mapStateToProps = state => ({
    documentHeight: state.main_info.documentHeight,
    scrollHeight: state.main_info.scrollHeight
});


const mapDispatchToProps = dispatch => ({
    changeMenu: (data) => dispatch({
        type: 'CHANGE_MENU',
        data: data
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);