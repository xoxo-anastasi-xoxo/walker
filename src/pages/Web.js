import React, {Component} from 'react'
import Header from "../components/Web/Header/Header"
import Map from "../components/Web/Map/Map"
import EventsMenu from "../components/Web/Event/EventsMenu"
import GroupMenu from "../components/Web/Group/GroupMenu"
import {connect} from "react-redux";

class Web extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                {this.props.mode === 0 && <Map/>}
                {this.props.mode === 1 && <EventsMenu/>}
                {this.props.mode === 2 && <GroupMenu/>}




            </div>
        );
    }
}


const mapStateToProps = state => ({
    mode: state.user.menu
});

export default connect(mapStateToProps)(Web);