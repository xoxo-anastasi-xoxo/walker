import React, {Component} from "react"
import "./Event.css"
import InputMoment from "./DatePicker/input-moment"
import '../Event/DatePicker/input-moment.css';
import moment from 'moment';
import {connect} from "react-redux";

class CreatingEventCard extends Component {
    state = {
        m: moment()
    };

    handleChange = m => {
        this.setState({ m });
    };

    handleSave = () => {
        console.log('saved', this.state.m.format('llll'));
    };

    handleClick() {
        this.props.quite();
    }

    // onChange(type) {
    //     switch (type) {
    //         case 0:
    //         здесь будет диспач с новыми значениями
    //     }
    // }
    render() {
        return (
            <div className="new-event">
                    <div   className="new-event__img"> </div>
                    <div  className="new-event__loc"> </div>

                    <input
                        type='text'
                        className='new-event__name'
                        name="name"
                        value={this.props.name}
                        placeholder="Название"
                        // onChange={this.onChange.bind(this, 0)}
                    />
                    <textarea
                        className='new-event__description'
                        name="description"
                        value={this.props.description}
                        placeholder="Описание"
                        // onChange={this.onChange.bind(this, 0)}
                    />
                <InputMoment
                moment={this.state.m}
                onChange={this.handleChange}
                onSave={this.handleSave}
                minStep={1} // default
                hourStep={1} // default
                prevMonthIcon="ion-ios-arrow-left" // default
                nextMonthIcon="ion-ios-arrow-right" // default
            />
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
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(CreatingEventCard);