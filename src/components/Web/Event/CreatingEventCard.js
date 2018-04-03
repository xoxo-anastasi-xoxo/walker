import React, {Component} from "react"
import "./Event.css"
import InputMoment from "./DatePicker/input-moment"
import '../Event/DatePicker/input-moment.css';
import moment from 'moment';
import {connect} from "react-redux";
import $ from "jquery";
import {getCookie} from "../../../cookie";

class CreatingEventCard extends Component {
    state = {
        m: this.props.el.date ? moment(this.props.el.date) : moment(),
        lat: this.props.el.lat,
        lng: this.props.el.lng,
        name: this.props.el.name || "",
        description: this.props.el.description || "",
        img:  this.props.el.img || "../../../img/default.jpg",
        privacy: this.props.el.privacy || false
    };


    handleChange = m => {
        this.setState({m});
    };

    handleSave = () => {
        // private Long ownerId;
        // private String token;
        // private Long id;
        // private Double latitude;
        // private Double longitude;
        // private Long date;
        // private Long duration;
        // private Boolean privacy;
        // private String description;
        // private Byte[] picture;

        let token = getCookie("token");

        console.log({
            ownerId: this.props.id,
            token: token,
            id: this.props.index,
            latitude: this.state.lat,
            longitude: this.state.lng,
            date: this.state.m._d.getTime(),
            duration: 0,
            privacy: this.state.privacy,
            description: this.state.description,
            picture: null
        });

        fetch('http://walkerapp.ru:8080/events/change', {
            method: 'POST',
            body: JSON.stringify({
                ownerId: this.props.id,
                token: token,
                id: this.props.index,
                latitude: this.state.lat,
                longitude: this.state.lng,
                date: this.state.m._d.getTime(),
                duration: 0,
                privacy: this.state.privacy,
                description: this.state.description,
                picture: null
            })
        }).then(function (response) {
            return response.json();
        }).then((value => {
            console.log(value);
        }));
    };

    handleClick() {
    }


    onChange(e) {
        let val = e.target.value;
        this.setState({name: val});
        console.log(this.state.name)
    };

    onDChange = e => {
        let val = e.target.value;
        this.setState({description: val});
        console.log(this.state.description)
    };

    render() {
        return (
            <div className="new-event">
                {
                    this.state.img ? <div className="new-event__img" style={{backgroundImage: 'url("' + this.state.img + '")'}}> </div>
                :   <div className="new-event__img"
                         style={{backgroundImage: 'url("../../../img/default.jpg")'}}> </div>
                }


                 {/*style={{backgroundImage: 'url("' + this.state.img + '")'}}> </div>*/}

                <div  className="new-event__buttons">
                    <div className="new-event__btn"
                         onClick={this.handleSave.bind(this)}
                    > </div>
                    <div className="new-event__loc"
                         // onClick={this.handleEditClick.bind(this)}
                    > </div></div>

                <input
                    type='text'
                    className='new-event__name'
                    name="name"
                    value={this.state.name}
                    placeholder="Название"
                    onChange={this.onChange.bind(this)}
                />
                <textarea
                    id="txtInput"
                    className='new-event__description'
                    name="description"
                    value={this.state.description}
                    placeholder="Описание"
                    onChange={this.onDChange}
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
    id: state.user.userId,
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