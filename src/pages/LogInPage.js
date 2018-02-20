import React, {Component} from 'react'
import LogIn from "../components/NewSite/Login/Login"

class LogInPage extends Component {
    componentWillMount() {
        if (window.location.hash !== "") {
            let req = window.location.hash.split('&');
            let token = req[0].split('=')[1];
            let id = req[2].split('=')[1];

            // fetch("http://192.168.1.79:8080/test/hello",{
            //     method: 'GET'
            //     }).then(function(response) {
            //     return response.text();
            //      }).then((value => {console.log(value)}));

            //  let r = 'http://192.168.1.79:8080/users/loginvk'

            let queryString = [
                "integration_id=" + id,
                "integration_type=VK",
                "token=" + token
            ].join('&');

            fetch('http://192.168.1.79:8080/users/loginvk?' + queryString, {
                method: 'GET'
            }).then(function (response) {
                return response.json();
            }).then((value => {
                console.log(value)
            }));

            //window.location.href = "/web/account";

        }
    }

    render() {
        return (
            <div className="page">
                <LogIn/>
            </div>
        );
    }
}

export default LogInPage;