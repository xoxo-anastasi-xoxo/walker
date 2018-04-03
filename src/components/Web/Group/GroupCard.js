import React, {Component} from "react"
import "./Group.css"
import {connect} from "react-redux";

class GroupCard extends Component {
    handleClick() {
        this.props.openMenu(this.props.index);
    }
       render() {
        return (
            <div className="group">
                <div className="group__img"
                     style={{backgroundImage: 'url("' + this.props.el.img + '")'}}> </div>

                <div className="group__info">
                    <div className="group__info__name">{this.props.el.name}</div>
                    <div className="group__info__users">
                        <div className="group__info__users__button"
                             onClick={this.handleClick.bind(this)}>Участники:</div>
                        <div className="group__info__users_list">
                            {
                                this.props.menu ===  this.props.menu &&
                                this.props.el.isOpened && this.props.el.groups.map((key, index) =>
                                    <div key={index}>{key}</div>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    menu: state.user.count
});
const mapDispatchToProps = dispatch => ({
    openMenu: (index) => dispatch({
        type: 'OPEN_USERS_MENU',
        index: index
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(GroupCard);