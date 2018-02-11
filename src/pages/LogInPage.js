import React, {Component} from 'react'
import Header from '../components/Site/Header/Header'
import Footer from "../components/Site/Footer/Footer";
import LogIn from "../components/Site/LogIn/LogIn"

class LogInPage extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <LogIn/>
                <Footer/>
            </div>
        );
    }
}

export default LogInPage;