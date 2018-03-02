import React, {Component} from 'react'
import LogIn from "../components/NewSite/Login/Login"
import {connect} from "react-redux";
import {setCookie} from '../cookie'

class LogInPage extends Component {
    componentWillMount() {
        if (window.location.hash !== "") {
            let req = window.location.hash.split('&');
            let token = req[0].split('=')[1];
            let id = req[2].split('=')[1];

            setCookie("token", token,
                {
                    expires: "Mon, 26 Aug 2019 00:00:00 GMT"
                });
            setCookie("id", id,
                {
                    expires: "Mon, 26 Aug 2019 00:00:00 GMT"
                });


            window.location.href = "/web/" + window.location.hash;
        }
    }

    render() {
        console.log(this.props.name);
        return (
            <div className="page">
                <LogIn/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    documentHeight: state.main_info.documentHeight,
    scrollHeight: state.main_info.scrollHeight,
    name: state.user.userName
});


const mapDispatchToProps = dispatch => ({
    userLogIn: (id, name, ava) => dispatch({
        type: 'USER_LOGIN',
        id: id,
        name: name,
        ava: ava
    })
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);