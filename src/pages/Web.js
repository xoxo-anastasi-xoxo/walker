import React, {Component} from 'react'
import Header from "../components/Web/Header/Header"
import Map from "../components/Web/Map/Map"
import EventsMenu from "../components/Web/Event/EventsMenu"
import GroupMenu from "../components/Web/Group/GroupMenu"
import Quite from "../components/Web/Quite/Quite"
import {connect} from "react-redux";
import {setCookie, getCookie} from '../cookie'


class Web extends Component {
    componentWillMount() {
            let token = getCookie("token");
            let id = getCookie("id");

            let queryString = [
                "integration_id=" + id,
                "integration_type=VK",
                "token=" + token
            ].join('&');

            fetch('http://walkerapp.ru:8080/users/loginvk?' + queryString, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then((value => {
                this.props.userLogIn.call(this, value.serverID, value.name, value.avatar);
                queryString = [
                    "id=" + value.serverID,
                    "token=" + token,
                    "type=1"
                ].join('&');

                fetch('http://walkerapp.ru:8080/events/get_profile_events?' + queryString, {
                    method: 'GET'
                }).then(function (response) {
                    return response.json();
                }).then((value => {
                    console.log(value);
                }));
            }));


    }


    render() {
        return (
            <div className="page">
                <Header/>
                {this.props.mode === 0 && <Map/>}
                {this.props.mode === 1 && <EventsMenu/>}
                {this.props.mode === 2 && <GroupMenu/>}
                {this.props.mode === 3 && <Quite/>}
            </div>
        );
    }
}


const mapStateToProps = state => ({
    mode: state.user.menu,
    serverId: state.user.userId
});

const mapDispatchToProps = dispatch => ({
    userLogIn: (id, name, ava) => dispatch({
        type: 'USER_LOGIN',
        id: id,
        name: name,
        ava: ava
    }),
    // loadMap
});


export default connect(mapStateToProps, mapDispatchToProps)(Web);