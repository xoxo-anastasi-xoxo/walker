import React, {Component} from 'react'
import Header from '../components/Site/Header/Header'
import Footer from "../components/Site/Footer/Footer";

class About extends Component {
    render() {
        return (
            <div className="about-page">
                <Header/>
                <p>Ну в это уже другое)</p>
                <Footer/>
            </div>
        );
    }
}

export default About;