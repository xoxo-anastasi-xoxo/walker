import React, {Component} from "react"
import "./Event.css"
import {connect} from "react-redux";
import EventCard from "./EventCard"
import $ from "jquery";

class EventsMenu extends Component {

    handleClick(index) {
        this.props.changeMenu(index);
    }



    render() {
        let class1 = "profile-inner__bottom__menu__item";
        let class2 = "profile-inner__bottom__menu__item";
        let class3 = "profile-inner__bottom__menu__item";
        switch (this.props.mode) {
            case 0:
                class1 += "-active";
                break;
            case 1:
                class2 += "-active";
                break;

            case 2:
                class3 += "-active";
                break;

        }
        return (
            <div className="profile">
                <div className="profile-inner">
                    <div className="profile-inner__top"
                         style={{backgroundImage: 'url("' + this.props.userAva + '")'}}> </div>
                    <div className="profile-inner__user">
                        <p className="profile-inner__user__name">{this.props.userName}</p>
                        <div className="profile-inner__user__ava"
                             style={{backgroundImage: 'url("' + this.props.userAva + '")'}}> </div>
                    </div>
                    <div className="profile-inner__bottom">
                        <div className="profile-inner__bottom__menu">
                            <div className={class1}
                                 onClick={this.handleClick.bind(this, 0)}>Мои</div>
                            <div className={class2}
                                 onClick={this.handleClick.bind(this, 1)}>Будущие</div>
                            <div className={class3}
                                 onClick={this.handleClick.bind(this, 2)}>Прошедшие</div>
                        </div>
                        <div  className="profile-inner__bottom__list">
                            {this.props.mode === 0 && this.props.list1.map((key, index) => <EventCard index={index} key={index} el={key}/>)}
                            {this.props.mode === 1 && this.props.list2.map((key, index) => <EventCard index={index} key={index} el={key}/>)}
                            {this.props.mode === 2 && this.props.list3.map((key, index) => <EventCard index={index} key={index} el={key}/>)}
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
    mode: state.user.eventMenu,
    list1: state.user.userEventsAdmin,
    list2: state.user.userEvents,
    list3: state.user.userEventsOld

});


const mapDispatchToProps = dispatch => ({
    changeMenu: (data) => dispatch({
        type: 'CHANGE_EVENT_MENU',
        data: data
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(EventsMenu);