import React, {Component} from "react"
import "./Event.css"
import {connect} from "react-redux";

class EventCard extends Component {
    render() {
        return (
            <div className="event">
                <div className="event__img"
                     style={{backgroundImage: 'url("' + this.props.el.img + '")'}}> </div>
                {this.props.el.isEditable && <div className="event__edit"> </div>}
                <div className="event__info">
                    <div className="event__info__name">{this.props.el.name}</div>
                    <div className="event__info__date">{this.props.el.date}</div>
                    <div className="event__info__description">{this.props.el.description}</div>
                    <div>
                        <div>Участники</div>
                        <div></div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    userName: state.user.userName,
    userAva: state.user.userAva,
    menu: state.user.menu,
    list: state.user.menuList,
    isOpened: state.user.isOpened
});


const mapDispatchToProps = dispatch => ({
    openMenu: () => dispatch({
        type: 'OPEN_MENU'
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);