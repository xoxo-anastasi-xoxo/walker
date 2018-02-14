import React, {Component} from "react"
import "./Map.css"
import {connect} from "react-redux";

class Map extends Component {
    render() {
        return (
            <div className="map">
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(Map);