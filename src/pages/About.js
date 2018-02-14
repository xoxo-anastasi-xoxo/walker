import React, {Component} from 'react'
import Header from '../components/Site/Header/Header'
import Footer from "../components/Site/Footer/Footer";
import "./Pages.css"

class About extends Component {
    render() {
        return (
            <div className="page">
                <Header/>
                <Footer/>
            </div>
        );
    }
}

export default About;