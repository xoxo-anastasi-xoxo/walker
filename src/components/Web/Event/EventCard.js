import React, {Component} from "react"
import "./Event.css"
import {connect} from "react-redux";

class EventCard extends Component {
    handleClick() {
        this.props.openMenu(this.props.index);
    }


    handleLocationClick() {
        console.log("handleLocationClick");
        this.props.moveToMap(this.props.lat, this.props.lng);
    }

    render() {
        return (
            <div className="event">
                <div className="event__img"
                     style={{backgroundImage: 'url("' + this.props.el.img + '")'}}> </div>
                {this.props.el.isEditable && <div className="event__edit"> </div>}
                <div className="event__loc"> </div>
                <div className="event__info">
                    <div className="event__info__name">{this.props.el.name}</div>
                    <div className="event__info__date">{this.props.el.date}</div>
                    <div className="event__info__description">{this.props.el.description}</div>
                    <div className="event__info__users">
                        <div className="event__info__users__button"
                             onClick={this.handleClick.bind(this)}>Участники:</div>
                        <div className="event__info__users_list">
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
    userName: state.user.userName,
    userAva: state.user.userAva,
    menu: state.user.count,
    list: state.user.menuList,
    isOpened: state.user.isOpened
});


const mapDispatchToProps = dispatch => ({
    openMenu: (index) => dispatch({
        type: 'OPEN_GROUPS_MENU',
        index: index
    }),
    moveToMap: (lat, lng) => dispatch({
        type: 'MOVE_TO_MAP',
        lat: lat,
        lng: lng
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);