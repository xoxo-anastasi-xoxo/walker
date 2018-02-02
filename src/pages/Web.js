import React, {Component} from 'react'
import Header from '../components/Header/Header'
import Footer from "../components/Footer/Footer";

class Web extends Component {
    render() {
        return (
            <div className="web-page">
                <Header/>
                <p>Ну в это уже другое)</p>
                <Footer/>
            </div>
        );
    }
}

export default Web;