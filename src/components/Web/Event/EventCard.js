import React, {Component} from "react"
import "./Event.css"
import {connect} from "react-redux";
import moment from 'moment';
import ru from "moment/locale/ru.js"


class EventCard extends Component {
    handleClick() {
        this.props.openMenu(this.props.index);
    }


    handleLocationClick() {
        this.props.changeMenu(0);
        this.props.moveToMap(this.props.el.lat, this.props.el.lng);
    }

    handleEditClick() {
        this.props.startEdit(this.props.index);
    }

    render() {
        // date 1521191760000
        // description "Second Description"
        // duration -263960826
        // groupId 17
        // groupName null
        // id 25
        // latitude 50
        // longitude 50
        // name "SecondtTestEvent"
        // ownerId 14
        // participants 3
        // pathToThePicture "ChangedErrorError"
        // privacy false
        // type 1
        return (
            <div className="event">
                <div className="event__img"
                     // style={{backgroundImage: 'url("../../../img/default.jpg")'}}> </div>
                style={{backgroundImage: 'url("' + this.props.el.img + '")'}}> </div>
                <div  className="event__buttons">
                {this.props.el.isEditable ? <div className="event__edit"
                                                 onClick={this.handleEditClick.bind(this)}> </div>:<div style={{width: "30px", height: "30px"}}> </div>}
                <div className="event__loc"
                     onClick={this.handleLocationClick.bind(this)}> </div></div>
                <div className="event__info">
                    <div className="event__info__name">{this.props.el.name}</div>
                    <div className="event__info__date">{moment(this.props.el.date).locale('ru').format("lll")}</div>
                    <div className="event__info__description">{this.props.el.description}</div>
                    <div className="event__info__users">
                        <div className="event__info__users__button">{"Участники: " + this.props.el.groupName || "Пубичное событие"}</div>
                        {/*<div className="event__info__users_list">*/}
                            {/*{*/}
                                {/*this.props.menu ===  this.props.menu &&*/}
                                {/*this.props.el.isOpened && this.props.el.groups.map((key, index) =>*/}
                                    {/*<div key={index}>{key}</div>)*/}
                            {/*}*/}
                        {/*</div>*/}
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
    changeMenu: (data) => dispatch({
        type: 'CHANGE_MENU',
        data: data
    }),
    moveToMap: (lat, lng) => dispatch({
        type: 'MOVE_TO_MAP',
        lat: lat,
        lng: lng
    }),
    startEdit: (index) => dispatch({
        type: 'START_EDIT',
        index: index
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(EventCard);