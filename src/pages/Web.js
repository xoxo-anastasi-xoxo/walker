import React, {Component} from 'react'
import Header from '../components/Header/Header'

class Web extends Component {
    render() {
        return (
            <div className="web-page">
                <Header/>
                <p>Ну в это уже другое)</p>
            </div>
        );
    }
}

export default Web;