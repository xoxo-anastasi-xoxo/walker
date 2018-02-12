import React, {Component} from 'react'
import Header from '../components/Site/Header/Header'
import Footer from "../components/Site/Footer/Footer";
import "./Pages.css"

class About extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <p>Ну в это уже другое)</p>
                <div className="tes">
                <a href="javascript:void(0)" className="test"></a>
                <div className="test-two"></div></div>
                <Footer/>
            </div>
        );
    }
}

export default About;