import React, {Component} from "react"
import "./Footer.css"
import {connect} from "react-redux";

class Footer extends Component {
    render() {
        return (
            <div className="n_footer">
                ⒸWalker 2018
            </div>
        );
    }
}

const mapStateToProps = state => ({
    flag: state.main_info.isLogIn
});

export default connect(mapStateToProps)(Footer);